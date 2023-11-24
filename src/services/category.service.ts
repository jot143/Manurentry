import { Injectable } from '@angular/core';
import { Category } from 'src/controller/model/Category';
import { RequestService } from 'src/controller/utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [];

  constructor(private requestService: RequestService) { }

  add(data: Partial<{parentCategory: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("addCategory", data, success);
  }

  edit(data: Partial<{id: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("editCategory", data, success);
  }

  getAll() {
    const success = (value) => {
      if(value.status = 'OK') {
        this.categories = Category.createFromArray(value.data);
      }
    }
    this.requestService.send("getCategories", {}, success);
  }

  deleteCategory(data: Partial<{id: number}>, success: (value: any) => void) {
    const _success = (value) => {
      if(value.status = 'OK' && data?.id) {
        success && success(value);
      }
    }
    this.requestService.send("deleteCategory", data, _success);
  }
}
