import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RawCategory } from 'src/controller/model/RawCategory';
import { RawCategoryService } from 'src/services/raw-item/category-raw.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css'],
})
export class CategoryNewComponent {

  @Input() public parent: RawCategory | null;

  form = new FormGroup({
    parentCategory:  new FormControl(''),
    name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(public activeModal: NgbActiveModal, private categoryService: RawCategoryService) {}

  ngOnInit() {
    this.form.patchValue({
      parentCategory: String(this.parent.id)
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
    this.categoryService.add(data, success);
  }
  
}
