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
        this.categories = value.data;
        console.log(this.categories)
      }
    }
    this.requestService.send("getCategories", {}, success);
  }

  deleteCategory(data: Partial<{id: number}>) {
    const success = (value) => {
      if(value.status = 'OK' && data?.id) {
        this.categories = [...this.categories.filter((item) => item.id != Number(data.id))];
      }
    }
    this.requestService.send("deleteCategory", data, success);
  }
}
