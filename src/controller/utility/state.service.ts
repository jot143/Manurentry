import { Constants } from '../config/constant';
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class StateService {

  default = {
    disclaimer: false,
    token: null,
    hasLoggedIn: false,
    user_id: null,
    user: null,
  };

   get userID() {
    return StoreService.get(Constants.USER_ID) ?? this.default.user_id;
  }

  set userID(val) {
    StoreService.set(Constants.USER_ID, val);
  }

  get hasLoggedIn() {
    return (
      StoreService.get(Constants.HAS_LOGGED_IN) ?? this.default.hasLoggedIn
    );
  }

  set hasLoggedIn(val) {
    StoreService.set(Constants.HAS_LOGGED_IN, val);
  }

  get token() {
    return StoreService.get(Constants.TOKEN) ?? this.default.token;
  }

  set token(val) {
    StoreService.set(Constants.TOKEN, val);
  }

  get user() {
    return StoreService.get(Constants.USER) ?? this.default.token;
  }

  set user(val) {
    StoreService.set(Constants.USER, val);
  }
}
