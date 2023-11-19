import {
  ActionPerformed,
  Channel,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';
import { BehaviorSubject, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';

// import { SwPush } from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  token: BehaviorSubject<Token> = new BehaviorSubject<any>(null);
  pushNotificationReceived: Subject<any> = new Subject();
  pushNotificationActionPerformed: Subject<any> = new Subject();

  webPushSubscription: BehaviorSubject<PushSubscription> = new BehaviorSubject<any>(null);

  constructor(private platform: Platform, /*private swPush: SwPush*/) {
    this.init();
  }

  init() {
    this.platform.ready().then(() => {
      if (this.platform.is('capacitor')) {
        this.registerMobile();
      } else {
        // this.registerWeb();
      }
    });
  }

  getToken() {
      if (this.platform.is('capacitor')) {
        if (this.token && this.token.value) {
          return Promise.resolve(this.token.value);
        }

        return new Promise((resolve, reject) => {
          this.token.subscribe((token) => {
            if (token && token.value) {
              resolve(token);
            }
          });
        });
      } else {
        if (this.webPushSubscription && this.webPushSubscription.value) {
          return Promise.resolve(this.webPushSubscription.value);
        }

        return new Promise((resolve, reject) => {
          this.webPushSubscription.subscribe((webPushSubscription) => {
            if (webPushSubscription) {
              resolve(webPushSubscription);
            }
          });
        });
      }
  }

  async registerWeb() {
    console.log('registerWeb')
    // this.swPush.subscription.subscribe((sub: PushSubscription | null) => {
    //     console.log(sub)
    // });
    // this.swPush.requestSubscription({
    //   serverPublicKey: environment.webPushKey
    // }).then((sub: PushSubscription) => {
    //   console.log(sub);
    // }).catch(err => console.error("Could not subscribe to notifications", err));
  }

  async registerMobile() {
    PushNotifications.addListener('registration',
      (token: Token) => {
        this.token.next(token);

        // Show us the notification payload if the app is open on our device
        PushNotifications.addListener('pushNotificationReceived',
          (notification: PushNotificationSchema) => {
            this.pushNotificationReceived.next(notification);
          }
        );

        // Method called when tapping on a notification
        PushNotifications.addListener('pushNotificationActionPerformed',
          (notification: ActionPerformed) => {
            this.platform.ready().then(() => {
              this.pushNotificationActionPerformed.next(notification);
            });
          }
        );

        const channel: Channel = {
          id: '1234567890',
          name: environment.appName,
          importance: 5
        };

        PushNotifications.createChannel(channel).then((res: any) => {
        });
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    PushNotifications.requestPermissions().then((result: { receive: string; }) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();

      } else {
        // Show some error
      }
    });
  }


  // Local
  showWebLocalNotification(title: string, body: string, swRegistration: ServiceWorkerRegistration) {
    // const options = {
    //   "//": "Visual Options",
    //   "body": "<String>",
    //   "icon": "<URL String>",
    //   "image": "<URL String>",
    //   "badge": "<URL String>",
    //   "vibrate": "<Array of Integers>",
    //   "sound": "<URL String>",
    //   "dir": "<String of 'auto' | 'ltr' | 'rtl'>",
    //   "//": "Behavioural Options",
    //   "tag": "<String>",
    //   "data": "<Anything>",
    //   "requireInteraction": "<boolean>",
    //   "renotify": "<Boolean>",
    //   "silent": "<Boolean>",
    //   "//": "Both Visual & Behavioural Options",
    //   "actions": "<Array of Strings>",
    //   "//": "Information Option. No visual affect.",
    //   "timestamp": "<Long>"
    // }
    const options = {
      body
    };
    swRegistration.showNotification(title, options);
  }

}
