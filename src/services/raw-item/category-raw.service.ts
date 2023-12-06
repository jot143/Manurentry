import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { RawCategory } from 'src/controller/model/RawCategory';
import { RequestService } from 'src/controller/utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class RawCategoryService {

  rawCategories = new BehaviorSubject<RawCategory[]>([]);

  constructor(private requestService: RequestService) { }

  add(data: Partial<{parentCategory: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("addRawCategory", data, success);
  }

  edit(data: Partial<{id: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("editRawCategory", data, success);
  }

  getAll() {
    const success = (value) => {
      if(value.status = 'OK') {
        this.rawCategories.next(RawCategory.createFromArray(value.data));
      }
    }
    this.requestService.send("getRawCategories", {}, success);
  }

  deleteRawCategory(data: Partial<{id: number}>, success: (value: any) => void) {
    const _success = (value) => {
      if(value.status = 'OK' && data?.id) {
        success && success(value);
      }
    }
    this.requestService.send("deleteRawCategory", data, _success);
  }
}
