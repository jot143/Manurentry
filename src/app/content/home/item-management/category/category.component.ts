import { ChangeDetectorRef, Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CategoryNewComponent } from "./category-new/category-new.component";
import { CategoryService } from "src/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent {
  breadcrumb = {
    mainlabel: "Category",
    links: [
      {
        name: "Item Management",
        isLink: true,
        link: "/home/item-management",
      },
      {
        name: "Category",
        isLink: false,
      },
    ],
  };

  constructor(
    private modalService: NgbModal,
    public categoryService: CategoryService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  add() {
    const modalRef = this.modalService.open(CategoryNewComponent, {});
    modalRef.componentInstance.parent = null;

    modalRef.result.then((result) => {
      this.categoryService.categories.value.push(result)
      this.categoryService.categories.next(this.categoryService.categories.value);
    });
  }

  getAllCategories() {
    this.categoryService.getAll();
  }

  onSyncEmitter(e: "edit" | "delete") {
    this.cd.detectChanges();
  }
}
