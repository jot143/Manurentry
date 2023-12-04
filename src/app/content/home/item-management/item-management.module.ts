import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { CommonModule } from '@angular/common';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { InputModule } from '../../partials/inputs/input.module';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemManagementRoutingModule } from './item-management-routing.module';
import { ItemsComponent } from './items/items.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PartialsModule } from '../../partials/partials.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [
    CategoryComponent,
    ItemsComponent,
    CompositeItemsComponent,
    InventoryAdjustmentsComponent,
    ItemsNewComponent,
    ItemsEditComponent,
    CategoryNewComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    ItemManagementRoutingModule,
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
export class ItemManagementModule { }
