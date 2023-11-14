import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemManagementRoutingModule } from './item-management-routing.module';
import { CategoryComponent } from './category/category.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemsGroupsComponent } from './items-groups/items-groups.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ItemsComponent,
    CompositeItemsComponent,
    ItemsGroupsComponent,
    InventoryAdjustmentsComponent
  ],
  imports: [
    CommonModule,
    ItemManagementRoutingModule
  ]
})
export class ItemManagementModule { }
