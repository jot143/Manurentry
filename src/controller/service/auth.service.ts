import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavCtrlService } from 'src/controller/utility/nav-ctrl.service';
import { Platform } from '@ionic/angular';
import { RequestLoader } from '../utility/RequestLoader';
import { RequestService } from 'src/controller/utility/request.service';
import { StateService } from 'src/controller/utility/state.service';
import { StoreService } from 'src/controller/utility/store.service';
import { ToastrService } from 'src/controller/utility/toastr.service';
import { User } from 'src/controller/model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = new BehaviorSubject(false);
  user: User | null = null;

  constructor(
    private platform: Platform,
    private toastr: ToastrService,
    public store: StoreService,
    private requestService: RequestService,
    public navCtrl: NavCtrlService,
    private stateService: StateService
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    const response = this.stateService.hasLoggedIn;
    if (response === 'true') {
      this.authState.next(true);
    }
    return response;
  }

  getToken(): Promise<any> {
    return Promise.resolve(this.stateService.token);
  }

  isLoggedIn(): Promise<boolean> {
    return Promise.resolve(this.stateService.hasLoggedIn);
  }

  setLoggedIn(value: any) {
    this.user = new User();
    this.user.set(value, true);
    this.stateService.token = value.token;
    this.stateService.hasLoggedIn = true;
    this.stateService.userID = this.user.id;
  }

  async login(user: any, loginLoader: RequestLoader | null = null) {
    const success = (value: any) => {
      if (value.status == 'OK') {
        this.setLoggedIn(value.data.user);
        this.navCtrl.goTo('/home', {}, 'root');
      } else if (value.status == 'FAILED') {
        this.toastr.error(value.message);
      } else {
        this.toastr.error("Something went wrong");
      }
    };

    return this.requestService.send('login', user, success, false, loginLoader);
  }

  async signup(user: any,loader: RequestLoader | null = null) {
    const success = (value: any) => {
      if(value.status == 'OK') {
        this.setLoggedIn(value.data.user);
        this.navCtrl.closePopup();
        this.navCtrl.goTo('/home', {}, 'root');
        this.toastr.success(value.message);
      } else if (value.status == 'FAILED') {
        this.toastr.error(value.message);
      } else {
        this.toastr.error("Something went wrong");
      }
    };

    return this.requestService.send('register', user, success, false ,loader);
  }

  logout() {
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    localStorage.clear();
    this.authState.next(false);
    this.navCtrl.goTo('/auth', {}, 'root');
  }

  loadCurrentUser(backgroundMode = false) {
    const currentUser = StoreService.get('User');
    if (currentUser === null) {
      this.logout();
    }

    this.user = new User();
    this.user.set(currentUser, true);
    return this.getUserProfile(backgroundMode);
  }

  getUserProfile(backgroundMode = false) {
    const data = {
      id: this.stateService.userID,
    };
    const success = (value: any) => {
      this.user?.set(value.data.user, true);
    };

    return this.requestService.send('myProfileGet', data, success, backgroundMode);
  }

  async registerOtp(user: any, response: any = null, loader: RequestLoader | null = null) {
    return this.requestService.send('registerOtp', user, response, false, loader);
  }

  async forgetPassword(data: any, success: any, loader: RequestLoader | null = null) {
    return this.requestService.send('forgotPassword', data, success, false, loader);
  }

  async resetPasswordUsingOtp(data: any, success: any,loader: RequestLoader | null = null) {
    return this.requestService.send('resetPasswordUsingOtp', data, success,false,loader);
  }

  async getUserLogout() {
    const success = (value: any) => {
      if (value.status !== 'OK') {
        this.toastr.error(value.message);
        return;
      }
      this.logout();
    };

    return this.requestService.send('UserLogout', {}, success);
  }
}
