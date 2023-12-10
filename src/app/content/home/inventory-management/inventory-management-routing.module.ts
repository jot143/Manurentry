import { RouterModule, Routes } from '@angular/router';

import { InventoryComponent } from './inventory/inventory.component';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseNewComponent } from './warehouse/warehouse-new/warehouse-new.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inventory',
    pathMatch: 'full'
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'warehouse',
    component: WarehouseComponent
  },
  {
    path: 'warehouse-new',
    component: WarehouseNewComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryManagementRoutingModule { }
