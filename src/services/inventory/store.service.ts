import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/controller/utility/request.service';
import { Store } from 'src/controller/model/Store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  stores =  new BehaviorSubject<Store[]>([]);

  constructor(private requestService: RequestService) {}

  addStore(data: any, success: (value: any) => void) {
    this.requestService.send("addStore", data, success);
  }

  edit(
    data: Partial<{ id: string; name: string }>,
    success: (value: any) => void
  ) {
    this.requestService.send("editStore", data, success);
  }

  getAll() {
    const success = (value) => {
      if ((value.status = "OK")) {
        this.stores.next(Store.createFromArray(value.data));
      }
    };
    this.requestService.send("getStores", {}, success);
  }

  deleteStore(data: Partial<{ id: number }>, success: (value: any) => void) {
    const _success = (value) => {
      if ((value.status = "OK" && data?.id)) {
        success && success(value);
      }
    };
    this.requestService.send("deleteStore", data, _success);
  }
}
