import { Injectable } from "@angular/core";
import { RequestService } from "../controller/utility/request.service";
import { Item } from "src/controller/model/Item";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ItemService {

  items =  new BehaviorSubject<Item[]>([]);

  constructor(private requestService: RequestService) {}

  addItem(data: any, success: (value: any) => void) {
    this.requestService.send("addItem", data, success);
  }

  edit(
    data: Partial<{ id: string; name: string }>,
    success: (value: any) => void
  ) {
    this.requestService.send("editItem", data, success);
  }

  getAll() {
    const success = (value) => {
      if ((value.status = "OK")) {
        this.items = Item.createFromArray(value.data);
      }
    };
    this.requestService.send("getItems", {}, success);
  }

  deleteItem(data: Partial<{ id: number }>, success: (value: any) => void) {
    const _success = (value) => {
      if ((value.status = "OK" && data?.id)) {
        success && success(value);
      }
    };
    this.requestService.send("deleteItem", data, _success);
  }
}
