import { Injectable } from '@angular/core';
import { RequestService } from 'src/controller/utility/request.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private requestService: RequestService) { }

  addCategory(data: Partial<{parentCategory: string, name: string}>, success: (value: any) => void) {
    this.requestService.send("addCategories", data, success);
  }
}
