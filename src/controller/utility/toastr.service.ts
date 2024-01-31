import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private toastController: ToastController) {}

  error(msg: string) {
    this.presentToast(msg);
  }

  success(msg: string) {
    this.presentToast(msg);
  }

  info(msg: string) {
    this.presentToast(msg);
  }

  private async presentToast(
    message: any,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position,
    });

    await toast.present();
  }
}
