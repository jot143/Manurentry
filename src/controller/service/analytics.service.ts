import { NavigationEnd, Router } from '@angular/router';

import { Device } from '@capacitor/device';
import { FirebaseAnalytics } from "@capacitor-community/firebase-analytics";
// import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private router: Router) {
    this.initFireBase();
    this.router.events
    .pipe(filter((e) => e instanceof NavigationEnd))
    .subscribe((e) => {
      this.setScreenName((e as NavigationEnd).url);
    });
  }

  async initFireBase() {
    if((await Device.getInfo()).platform == 'web') {
      FirebaseAnalytics.initializeFirebase(environment.firebaseConfig).then(() => {
        this.enable();
      });
    }
  }

  setUser(user: User) {
    if(user.id) {
      FirebaseAnalytics.setUserId({
        userId: String(user.id),
      });
    }
  }

  setProperty(name: string, value: string) {
    FirebaseAnalytics.setUserProperty({
      name: name,
      value: value,
    });
  }

  setScreenName(name: string) {
    FirebaseAnalytics.setScreenName({
      screenName: name
    });
  }

  logEvent(name: string, method: "", items: any[], content_id: string = "", content_type: "image" | "text" = 'text', ) {
    FirebaseAnalytics.logEvent({
      name,
      params: {
        method,
        content_type,
        content_id,
        items //: [{ name: "Kittens" }],
      },
    });
  }

  enable() {
    FirebaseAnalytics.enable();
    FirebaseAnalytics.setCollectionEnabled({
      enabled: true
    });
  }

  disable() {
    FirebaseAnalytics.disable();
    FirebaseAnalytics.setCollectionEnabled({
      enabled: false
    });
  }

  //
  // async crash(message: string) {
  //   await FirebaseCrashlytics.crash({ message });
  // };


}
