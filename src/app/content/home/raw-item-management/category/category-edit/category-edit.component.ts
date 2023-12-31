import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RawCategory } from 'src/controller/model/RawCategory';
import { RawCategoryService } from 'src/services/raw-item/category-raw.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent {

  @Input() public category: RawCategory = new RawCategory();

  form = new FormGroup({
    name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
    id:  new FormControl('', Validators.required),
  });

  constructor(public activeModal: NgbActiveModal, private categoryService: RawCategoryService) {}

  ngOnInit() {
    this.form.patchValue({
      name: String(this.category.name),
      id: String(this.category.id)
    })
  }

  save() {
    this.form.markAllAsTouched();
    if(this.form.invalid) {
      return;
    }

    const data = this.form.value;

    const success = (value) => {
      if(value.status = 'OK') {
        this.activeModal.close(value.data);
      }
    }
    this.categoryService.edit(data, success);
  }
  
}
