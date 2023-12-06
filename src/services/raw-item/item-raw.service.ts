import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { RawItem } from "src/controller/model/RawItem";
import { RequestService } from "../../controller/utility/request.service";

@Injectable({
  providedIn: "root",
})
export class RawItemService {

  rawItems =  new BehaviorSubject<RawItem[]>([]);

  constructor(private requestService: RequestService) {}

  addItem(data: any, success: (value: any) => void) {
    this.requestService.send("addRawItem", data, success);
  }

  edit(
    data: Partial<{ id: string; name: string }>,
    success: (value: any) => void
  ) {
    this.requestService.send("editRawItem", data, success);
  }

  getAll() {
    const success = (value) => {
      if ((value.status = "OK")) {
        this.rawItems.next(RawItem.createFromArray(value.data));
      }
    };
    this.requestService.send("getRawItems", {}, success);
  }

  deleteRawItem(data: Partial<{ id: number }>, success: (value: any) => void) {
    const _success = (value) => {
      if ((value.status = "OK" && data?.id)) {
        success && success(value);
      }
    };
    this.requestService.send("deleteRawItem", data, _success);
  }
}
