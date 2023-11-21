import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css'],
})
export class CategoryNewComponent {

  @Input() public parent;

  form = new FormGroup({
    parentCategory:  new FormControl(''),
    name:  new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  constructor(public activeModal: NgbActiveModal, private categoryService: CategoryService) {}

  addCategory() {
    this.form.markAllAsTouched();
    if(this.form.invalid) {
      return;
    }

    const data = this.form.value;

    const success = (value) => {
      this.activeModal.close(value.data);
    }
    this.categoryService.addCategory(data, success);
  }
  
}
