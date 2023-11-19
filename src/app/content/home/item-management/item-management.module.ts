import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemManagementRoutingModule } from './item-management-routing.module';
import { CategoryComponent } from './category/category.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemsComponent } from './items/items.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryNewComponent } from './category-new/category-new.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InputModule } from '../../partials/inputs/input.module';


@NgModule({
  declarations: [
    CategoryComponent,
    ItemsComponent,
    CompositeItemsComponent,
    InventoryAdjustmentsComponent,
    ItemsNewComponent,
    ItemsEditComponent,
    CategoryNewComponent
  ],
  imports: [
    CommonModule,
    ItemManagementRoutingModule,
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    InputModule
  ]
})
export class ItemManagementModule { }
