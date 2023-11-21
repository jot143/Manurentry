import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryNewComponent } from '../category-new/category-new.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  breadcrumb = {
    'mainlabel': 'Category',
    'links': [
      {
        'name': 'Item Management',
        'isLink': true,
        'link': '/home/item-management'
      },
      {
        'name': 'Category',
        'isLink': false
      }
    ]
  };

  constructor(private modalService: NgbModal) {
    
  }

  newCategory() {
		const modalRef = this.modalService.open(CategoryNewComponent, {});
    modalRef.componentInstance.parent = null;

    modalRef.result.then((result) => {
      console.log(result);
    })
	}
}
