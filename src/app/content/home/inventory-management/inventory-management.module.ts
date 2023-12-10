import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { CommonModule } from '@angular/common';
import { InputModule } from '../../partials/inputs/input.module';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryManagementRoutingModule } from './inventory-management-routing.module';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PartialsModule } from '../../partials/partials.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { StoreComponent } from './store/store.component';
import { StoreNewComponent } from './store/store-new/store-new.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { WarehouseNewComponent } from './warehouse/warehouse-new/warehouse-new.component';

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
    InventoryManagementRoutingModule,
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
export class InventoryManagementModule { }
