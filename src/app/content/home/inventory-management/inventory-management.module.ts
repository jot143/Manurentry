import { CommonModule } from '@angular/common';
import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { StoreNewComponent } from './store/store-new/store-new.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseNewComponent } from './warehouse/warehouse-new/warehouse-new.component';
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  declarations: [
    WarehouseComponent,
    WarehouseNewComponent,
    StoreComponent,
    StoreNewComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryManagementRoutingModule
  ]
})
export class InventoryManagementModule { }
