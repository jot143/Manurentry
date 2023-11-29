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
import { CategoryNewComponent } from './category/category-new/category-new.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputModule } from '../../partials/inputs/input.module';
import { PartialsModule } from '../../partials/partials.module';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { NgSelectModule } from '@ng-select/ng-select';


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
  ]
})
export class ItemManagementModule { }
