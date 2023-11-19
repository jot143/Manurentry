import { Inject, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TuiAlertService } from '@taiga-ui/core';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private toastController: ToastController,  @Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

  error(msg: string, title = 'Alert') {
    this.alerts.open(msg, { label: title, status: 'error' }).subscribe();
  }

  success(msg: string, title = 'Alert') {
    this.alerts.open(msg, { label: title, status: 'success' }).subscribe();
  }

  info(msg: string, title = 'Alert') {
    this.alerts.open(msg, { label: title, status: 'info' }).subscribe();
  }

  private async presentToast(
    message: any,
    position: 'top' | 'middle' | 'bottom' = 'bottom'
  ) {
    this.toastController.create({
      message,
      duration: 1500,
      position,
    }).then((toast) => {
      toast.present()
    });
  }
}
