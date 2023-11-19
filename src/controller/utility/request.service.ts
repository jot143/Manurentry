import API from '../server/api';
import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from './Request';
import { RequestLoader } from './RequestLoader';
import { SpinnerService } from './spinner.service';
import { ToastrService } from './toastr.service';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  requestor = 'http';
  defaultSpinner!: HTMLIonLoadingElement;

  constructor(
    private http: HttpClient,
    private spinner: SpinnerService,
    private toastr: ToastrService
  ) { }

  async send(
    requestName: any,
    data: any = {},
    successHandler: any = null,
    backgroundmode = true,
    loaderHandler: null | RequestLoader = null,
    errorHandler = null,
    formData = false
  ): Promise<any> {

    return new Promise(async (resolve, reject) => {

      try {
        if (typeof API.endpoints[requestName] === 'undefined') {
          this.toastr.error(requestName + ' endpoint not defined');
          reject('Request Error');
          return;
        }

        const e: any = this;

        const url = () => {
          let tempUrl = '';
          if (typeof API.endpoints[requestName].domain == 'undefined') {
            tempUrl = API.defaultDomain() + API.endpoints[requestName].url;
          } else {
            tempUrl =
              API.endpoints[requestName].domain + API.endpoints[requestName].url;
          }

          for (const key in data) {
            const variable = '{{' + key + '}}';
            tempUrl = tempUrl.replace(variable, data[key]);
          }
          return tempUrl;
        };

        if (backgroundmode === false && loaderHandler) {
          loaderHandler.start();
        }

        const closeLoader = () => {
          if (loaderHandler) {
            loaderHandler.stop();
          }
        };

        const errorHandlerDefault = (error: any) => {
          if (error?.error?.status) {
            this.toastr.error(error?.error?.desc);
          } else {
            this.toastr.error('Something went wrong');
          }
          reject(error);
        };

        if (
          API.endpoints[requestName].requestType === 'post' ||
          API.endpoints[requestName].requestType === 'put'
        ) {
          const _url = url();

          if (formData === true) {
            const tempData = new FormData();

            for (const key in data) {
              tempData.append(key, data[key]);
            }

            data = tempData;
          }

          const requestor: HttpClient | any = e[this.requestor];
          const subscriber = requestor[API.endpoints[requestName].requestType](
            _url,
            data,
            { withCredentials: true }
          ).subscribe(
            (value: any) => {
              subscriber.unsubscribe();
              closeLoader();

              if (value.status == 'OK') {
                successHandler && successHandler(value);
              } else if (value.status == 'FAILED') {
                this.toastr.error(value.message);
                return;
              } else {
                this.toastr.error('Something went wrong');
              }
              resolve(value);
            },
            (error: any) => {
              subscriber.unsubscribe();
              closeLoader();

              if (errorHandler === null) {
                errorHandlerDefault(error);
              } else {
                reject(error);
              }

            },
            () => {
              closeLoader();
            }
          );
        }

        if (API.endpoints[requestName].requestType === 'delete') {
          const requestor: HttpClient = e[this.requestor];
          const subscriber = requestor.delete(url(), { body: data }).subscribe(
            (value: any) => {
              subscriber.unsubscribe();
              closeLoader();
              if (value.status == 'OK') {
                successHandler && successHandler(value);
              } else if (value.status == 'FAILED') {
                this.toastr.error(value.message);
                return;
              } else {
                this.toastr.error('Something went wrong');
              }
              resolve(value);
            },
            (error) => {
              subscriber.unsubscribe();
              closeLoader();

              if (errorHandler === null) {
                errorHandlerDefault(error);
              } else {
                reject(error);
              }
            },
            () => {
              closeLoader();
            }
          );
        }

        if (API.endpoints[requestName].requestType === 'get') {
          const subscriber = e[this.requestor].get(url()).subscribe(
            (value: any) => {
              subscriber.unsubscribe();
              closeLoader();
              if (value.status == 'OK') {
                successHandler && successHandler(value);
              } else if (value.status == 'FAILED') {
                this.toastr.error(value.message);
                return;
              } else {
                this.toastr.error('Something went wrong');
              }
              resolve(value);
            },
            (error: any) => {
              subscriber.unsubscribe();
              closeLoader();
              if (errorHandler === null) {
                errorHandlerDefault(error);
              } else {
                reject(error);
              }
            },
            () => {
              closeLoader();
            }
          );
        }
      }
      catch (err) {
        console.error(err)
        reject('Request Error');
      }
  });
  }


}
