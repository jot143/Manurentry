import API from "../server/api";

export class Request {
  method: 'post' | 'get' | 'put' | 'delete' = 'get';
  url = '';
  errors: Array<any> = [];
  warning: Array<any> = [];
  backgroundmode = false;
  body: Array<any> | FormData = [];
  bodyType: 'form-data' | 'json' = 'json';

  spinnerElementParent: HTMLElement | null = null;

  onError: any;
  onSuccess: any;

  spinner: any;

  constructor(requestName = null) {
    if (requestName != null) {
      this.init(requestName);
    } else {
      this.errors.push(`Request name required`);
    }
    return this;
  }

  silent(backgroundmode = true) {
    this.backgroundmode = backgroundmode;
    return this;
  }

  data(data: Array<any>) {
    this.body = data;
    this.updateDynamicUrlPath(data);
    return this;
  }

  formData(data: Array<any>) {
    this.updateDynamicUrlPath(data);

    const tempData = new FormData();
    for (const key in data) {
      tempData.append(key, data[key]);
    }

    this.body = tempData;
    return this;
  }

  params(data: Array<any>) {
    if (!this.url) {
      this.errors.push(`Set url before passing params`);
      return this;
    }

    let str = '';
    for (const key in data) {
      str += '&' + key + '=' + data[key];
    }
    this.url += '?' + str.substring(1);
    return this;
  }

  // setSpinnerElement(ele: HTMLElement) {
  //   this.spinnerElementParent = ele;
  //   return this;
  // }

  setSpinnerElement(spinner: any) {
    this.spinner = spinner;
  }

  private init(requestName: any) {
    if (typeof API.endpoints[requestName] === 'undefined') {
      this.errors.push(`${requestName} endpoint not defined`);
    }

    this.method = API.endpoints[requestName].requestType;

    let tempUrl = '';
    if (typeof API.endpoints[requestName].domain == 'undefined') {
      tempUrl = API.defaultDomain() + API.endpoints[requestName].url;
    } else {
      tempUrl =
        API.endpoints[requestName].domain + API.endpoints[requestName].url;
    }

    this.url = tempUrl;
  }

  private updateDynamicUrlPath(data: Array<any>) {
    if (!this.url) {
      this.errors.push(`Set url before passing data`);
      return;
    }

    for (const key in data) {
      const variable = '{{' + key + '}}';
      this.url = this.url.replace(variable, data[key]);
    }
  }
}
