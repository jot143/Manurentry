import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CommonModule } from '@angular/common';
import { InputModule } from '../../partials/inputs/input.module';
import { ItemsComponent } from './items/items.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PartialsModule } from '../../partials/partials.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RawItemManagementRoutingModule } from './raw-item-management-routing.module';

@NgModule({
  declarations: [
    CategoryComponent,
    ItemsComponent,
    ItemsNewComponent,
    ItemsEditComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    RawItemManagementRoutingModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    InputModule,
    PartialsModule,
    NgbModule,
    NgSelectModule,
    NgxDatatableModule,
    PerfectScrollbarModule
  ]
})
export class RawItemManagementModule { }
