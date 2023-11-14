import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { CompositeItemsComponent } from './composite-items/composite-items.component';
import { ItemsGroupsComponent } from './items-groups/items-groups.component';
import { CategoryComponent } from './category/category.component';
import { InventoryAdjustmentsComponent } from './inventory-adjustments/inventory-adjustments.component';

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
    path: 'composite-items',
    component: CompositeItemsComponent
  },
  {
    path: 'items-groups',
    component: ItemsGroupsComponent
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
