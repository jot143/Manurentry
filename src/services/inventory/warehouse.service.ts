import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RequestService } from 'src/controller/utility/request.service';
import { Warehouse } from 'src/controller/model/Warehouse';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  warehouses =  new BehaviorSubject<Warehouse[]>([]);

  constructor(private requestService: RequestService) {}

  addWarehouse(data: any, success: (value: any) => void) {
    this.requestService.send("addWarehouse", data, success);
  }

  edit(
    data: Partial<{ id: string; name: string }>,
    success: (value: any) => void
  ) {
    this.requestService.send("editWarehouse", data, success);
  }

  getAll() {
    const success = (value) => {
      if ((value.status = "OK")) {
        this.warehouses.next(Warehouse.createFromArray(value.data));
      }
    };
    this.requestService.send("getWarehouses", {}, success);
  }

  deleteWarehouse(data: Partial<{ id: number }>, success: (value: any) => void) {
    const _success = (value) => {
      if ((value.status = "OK" && data?.id)) {
        success && success(value);
      }
    };
    this.requestService.send("deleteWarehouse", data, _success);
  }
  
}
