import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css'],
})
export class CategoryNewComponent {

  form = new FormGroup({
    parentCategory:  new FormControl(''),
    category:  new FormControl('', Validators.required),
  });

  constructor(public activeModal: NgbActiveModal) {}
  
}
