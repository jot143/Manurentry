import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { CategoryComponent } from './category/category.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'items-new',
    component: ItemsNewComponent
  },
  {
    path: 'items-edit',
    component: ItemsEditComponent
  },
  {
    path: 'composite-items',
    component: CompositeItemsComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'inventory-adjustments',
    component: InventoryAdjustmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemManagementRoutingModule { }
