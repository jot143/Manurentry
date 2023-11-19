import { ModalController, NavController, PopoverController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root'
})
export class NavCtrlService {

  navigationData: any = null;
  popupData = null;
  itemDetail = null;
  products = null;
  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private route: ActivatedRoute,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) { }

  params() {
    return this.route.snapshot.params;
  }

  goTo(
    url: string,
    data: any = null,
    direction: 'forward' | 'back' | 'root' = 'forward'
  ) {
    if (data != null) {
      this.navigationData = data;
    }
    switch (direction) {
      case 'forward': {
        this.navCtrl
          .navigateForward(url)
          .then((res) => { })
          .catch((error) => {
            console.error(error);
          });
        break;
      }
      case 'back': {
        this.navCtrl
          .navigateBack(url)
          .then((res) => { })
          .catch((error) => {
            console.error(error);
          });
        break;
      }
      default: {
        this.navCtrl
          .navigateRoot(url)
          .then((res) => { })
          .catch((error) => {
            console.error(error);
          });
        break;
      }
    }
  }

  back() {
    this.navCtrl.back();
  }

  async popup(
    component: any,
    data: any = null,
    cssClass = 'popup'
  ) {
    if (data != null) {
      this.navigationData = data;
    }
    const modal = await this.modalCtrl.create({ component, cssClass });
    await modal.present();
    return modal;
  }

  async popupOver(component: any, data = null, event: any) {
    if (data != null) {
      this.popupData = data;
    }
    const modal = await this.popoverCtrl.create({
      component,
      translucent: true,
      event,
    });
    await modal.present();
  }

  async closePopup(data: any = null) {
    await this.modalCtrl.dismiss(data);
  }

  showDialogWithCustomButton(template: any, label = 'Dialog', button: any): void {
    this.dialogs
      .open(template, {
        label,
        size: 's',
        data: { button},
      })
      .subscribe();
  }
}
