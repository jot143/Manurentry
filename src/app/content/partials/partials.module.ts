import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryViewComponent } from './category-view/category-view.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RawCategoryViewComponent } from './raw-category-view/raw-category-view.component';
import { RouterModule } from '@angular/router';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectRawCategoryComponent } from './select-raw-category/select-raw-category.component';

@NgModule({
  declarations: [
    CategoryViewComponent,
    RawCategoryViewComponent,
    SelectCategoryComponent,
    SelectRawCategoryComponent
  ],
  exports: [
    CategoryViewComponent,
    RawCategoryViewComponent,
    SelectCategoryComponent,
    SelectRawCategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PartialsModule {}
