import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/controller/model/Category';
import { CategoryNewComponent } from '../../home/item-management/category/category-new/category-new.component';
import { CategoryEditComponent } from '../../home/item-management/category/category-edit/category-edit.component';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {

  @Input() category: Category = new Category();
  @Input() nestedLevel = 0;

  constructor(private modalService: NgbModal, private categoryService: CategoryService) {}

  ngOnInit() {

  }

  add() {
    const modalRef = this.modalService.open(CategoryNewComponent, {});
    modalRef.componentInstance.parent = this.category;

    modalRef.result.then((result) => {
      this.category.children.push(Category.create(result));
    }).catch(() => {

    }); 
  }

  edit() {
		const modalRef = this.modalService.open(CategoryEditComponent, {});
    modalRef.componentInstance.category = this.category;

    modalRef.result.then((result) => {
        this.category.name = result.name;
        this.category.slug = result.slug;
    })
	}

  deleteCategory() {
		const confirmed = confirm('Are you sure to delete ? ');
    if(confirmed) {
      this.categoryService.deleteCategory({id: this.category.id});
    }
	}
}
