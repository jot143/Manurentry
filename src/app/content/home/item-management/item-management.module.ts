import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemManagementRoutingModule } from './item-management-routing.module';
import { CategoryComponent } from './category/category.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemsGroupsComponent } from './items-groups/items-groups.component';
import { ItemsComponent } from './items/items.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    CategoryComponent,
    ItemsComponent,
    CompositeItemsComponent,
    ItemsGroupsComponent,
    InventoryAdjustmentsComponent,
    ItemsNewComponent,
    ItemsEditComponent
  ],
  imports: [
    CommonModule,
    ItemManagementRoutingModule,
    BreadcrumbModule
  ]
})
export class ItemManagementModule { }
