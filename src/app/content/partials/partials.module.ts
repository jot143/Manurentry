import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryViewComponent } from './category-view/category-view.component';


@NgModule({
  declarations: [
    CategoryViewComponent
  ],
  exports: [
    CategoryViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ]
})
export class PartialsModule {}
