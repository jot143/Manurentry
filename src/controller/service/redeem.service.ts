import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Redeem } from '../model/Redeem';
import { RequestLoader } from '../utility/RequestLoader';
import { RequestService } from '../utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class RedeemService {

  redeemEarned: Redeem[] = [];
  redeemInprogress: Redeem[] = [];

  constructor(private requestService: RequestService) { }

  showCode(dealId: number, success: (data: any) => void) {
    const _success = (value: any) => {
      if (value.status === 'OK') {
        success(Redeem.create(value.data));
        this.getRedeemHistory();
      }
    }
    return this.requestService.send('showCode', { dealId }, _success);
  }

  getCode(dealId: number, success: (data: any) => void) {
    const _success = (value: any) => {
      if (value.status === 'OK') {
        success(value.data ? Redeem.create(value.data) : null);
      }
    }
    return this.requestService.send('getCode', { dealId }, _success);
  }


  getRedeemHistory() {
    const success = (value: any) => {
      if (value.status === 'OK') {
        this.redeemInprogress = Redeem.createFromArray(value.data.filter((item: any) => item.status === 'showed'));
        this.redeemEarned = Redeem.createFromArray(value.data.filter((item: any) => item.status !== 'showed'));
      }
    };

    return this.requestService.send('redeemHistory', {}, success, true);
  }

  updateRedeemStatus(data: any, success: any = null,  loader: RequestLoader | null = null, ) {
    const _success = (value: any) => {
      if (value.status === 'OK') {
        success && success(value);
        this.getRedeemHistory();
      }
    }
    return this.requestService.send('updateRedeemStatus', data, _success, false, loader);
  }
}
