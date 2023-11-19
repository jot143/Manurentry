import { Injectable, NgZone } from '@angular/core';

import { AuthService } from './auth.service';
import { NavCtrlService } from '../utility/nav-ctrl.service';
import { RequestLoader } from '../utility/RequestLoader';
import { RequestService } from '../utility/request.service';
import { ToastrService } from '../utility/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public request: RequestService,
    public toastr: ToastrService,
    public navCtrl: NavCtrlService,
    public auth: AuthService,

  ) { }

  updatePassword(data: any,  response: any = null, loader: RequestLoader | null = null) {
    const success = (value: any) => {
      if (value.status === 'OK') {
        this.toastr.success(value.message);
        response && response(value);
      }
    };

    this.request.send('updatePassword', data, success, false, loader);
  }

  updateUserProfile(data: any, response: any = null, loader: RequestLoader | null = null) {
    const success = (value: any) => {
      if (value.status === 'OK') {
        this.auth.user?.set(value, true);
        this.toastr.success(value.message);
        response && response(value);
      }
    };

    this.request.send('myProfileUpdate', data, success, false, loader);
  }

  uploadProfilePic(data: any, response: any = null) {
    const success = (value: any) => {

      if (value.status !== 'OK') {
        this.toastr.error(value.desc);
        return;
      }

      if (response != null) {
        response(value);
      }
    };

    this.request.send('uploadProfilePic', data, success, false, undefined, null, true);
  }

}
