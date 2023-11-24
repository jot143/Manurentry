import { ActionPerformed, PushNotificationSchema } from "@capacitor/push-notifications";
import { ApplicationRef, Injectable, NgZone } from "@angular/core";

import { App } from '@capacitor/app';
import { AuthService } from "./auth.service";
import { NavCtrlService } from "../utility/nav-ctrl.service";
import { Platform } from "@ionic/angular";
import { PushNotificationService } from "./push-notification.service";
import { RedeemService } from "./redeem.service";
import { RequestService } from "../utility/request.service";
import { Subject } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  detectChanges = new Subject();

  constructor(
    private request: RequestService,
    private auth: AuthService,
    private platform: Platform,
    private pushNotification: PushNotificationService,
    private redeemService: RedeemService,
    private applicationRef: ApplicationRef,
    private zone: NgZone,
    private toastr: ToastrService,
    private navCtrl: NavCtrlService
  ) { }

  // sidebar function
  initHome() {

    this.registerDeviceOnServer();

    Promise.all([
      this.auth.loadCurrentUser(true),
      this.redeemService.getRedeemHistory()
    ]).finally(() => {
      this.emitChangeDetect();
    })
  }

  emitChangeDetect() {
    this.applicationRef.tick();
    this.detectChanges.next(true);
  }

  registerDeviceOnServer() {
    return new Promise((resolve, reject) => {
      this.platform.ready().then(() => {
        this.pushNotification.getToken().then((token: any) => {
          const success = (value: any) => { };
          this.request.send('registerDeviceOnServer', { fcmToken: token.value }, success);
        });
      });
    });
  }

  subscribePushNotification() {
    this.pushNotification.pushNotificationReceived.subscribe((notification: PushNotificationSchema) => {
      App.getState().then(state => {
        if (state.isActive === true) {
          this.zone.run(() => {
            this.toastr.info(notification.body as string);
          });
        }
      });
    });

    this.pushNotification.pushNotificationActionPerformed.subscribe((notificationBar: ActionPerformed) => {
      if (notificationBar.actionId === 'tap') {
        const notification = notificationBar.notification;
        this.zone.run(() => {
            if (notification.data?.url && notification.data?.url !== '') {
              this.navCtrl.goTo(notification.data?.url);
            }
        });
      }

    });
  }
}
