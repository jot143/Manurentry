import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryViewComponent } from './category-view/category-view.component';
import { SelectNestedComponent } from './select-nested/select-nested.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryViewComponent,
    SelectNestedComponent
  ],
  exports: [
    CategoryViewComponent,
    SelectNestedComponent
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
