import { Injectable } from '@angular/core';
import { RequestService } from '../utility/request.service';
import { ToastrService } from '../utility/toastr.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: any[] = [];

  constructor(
    private toastr: ToastrService,
    private requestService: RequestService,
  ) { }


  getNotifications(silent = true) {
    const success = (value: any) => {
      if (value.status !== 'OK') {
        return this.toastr.error(value.message);
      }
      this.notifications = value?.data?.notification;
    };
    return this.requestService.send('getNotifications', {}, success, false, silent);
  }
}
