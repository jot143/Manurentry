import { ChangeDetectorRef, Component } from "@angular/core";

import { CategoryNewComponent } from "./category-new/category-new.component";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { RawCategoryService } from "src/services/raw-item/category-raw.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent {
  breadcrumb = {
    mainlabel: "Raw Category",
    links: [
      {
        name: "Raw Item Management",
        isLink: true,
        link: "/home/raw-item-management",
      },
      {
        name: "Raw Category",
        isLink: false,
      },
    ],
  };

  constructor(
    private modalService: NgbModal,
    public categoryService: RawCategoryService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getAllCategories();
  }

  add() {
    const modalRef = this.modalService.open(CategoryNewComponent, {});
    modalRef.componentInstance.parent = null;

    modalRef.result.then((result) => {
      this.categoryService.rawCategories.value.push(result)
      this.categoryService.rawCategories.next(this.categoryService.rawCategories.value);
    });
  }

  getAllCategories() {
    this.categoryService.getAll();
  }

  onSyncEmitter(e: "edit" | "delete") {
    this.cd.detectChanges();
  }
}
