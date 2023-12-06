import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

import { Category } from 'src/controller/model/Category';
import { CategoryEditComponent } from '../../home/item-management/category/category-edit/category-edit.component';
import { CategoryNewComponent } from '../../home/item-management/category/category-new/category-new.component';
import { CategoryService } from 'src/services/item/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent {

  @Input() category: Category = new Category();
  @Input() nestedLevel = 0;
  @Input() mode: 'list' | 'dropdown' = 'list';

  @Output() syncEmitter = new EventEmitter();
  @Output() select = new EventEmitter();

  constructor(private modalService: NgbModal, private categoryService: CategoryService, private cd: ChangeDetectorRef) {}

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
        this.syncEmitter.emit({ action:'edit', data: this.category});
    })
	}

  deleteCategory() {
		const confirmed = confirm('Are you sure to delete ? ');
    if(confirmed) {
      this.categoryService.deleteCategory({id: this.category.id}, () => {
        this.syncEmitter.emit({action :'delete', data: this.category});
      });
    }
	}

  onSyncEmitter(e: { action: 'edit' | 'delete', data: any}) {
    if(e.action == 'edit') {
      this.category.children = [...this.category.children];
    } else if (e.action == 'delete') {
      this.category.children = [...this.category.children.filter((item) => item.id != Number(e.data.id))];
    }
    this.cd.detectChanges();
  }

  selected() {
    this.select.emit(this.category);
  }

  childSelected(e) {
    this.select.emit(e);
  }
}
