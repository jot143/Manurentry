import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/services/inventory/store.service';
import { ToastrService } from 'ngx-toastr';
import { WarehouseService } from 'src/services/inventory/warehouse.service';

@Component({
  selector: 'app-store-new',
  templateUrl: './store-new.component.html',
  styleUrls: ['./store-new.component.css']
})
export class StoreNewComponent {
  breadcrumb = {
    mainlabel: "New Warehouse",
    links: [
      {
        name: "Warehouse Management",
        isLink: true,
        link: "/home/warehouse-management",
      },
      {
        name: "New Warehouse",
        isLink: false,
      },
    ],
  };

  form = new FormGroup({
    name: new FormControl("", Validators.required),
    warehouse: new FormControl("", Validators.required),
  });

  constructor(
    public warehouseService: WarehouseService,
    public storeService: StoreService,
    private toastr: ToastrService,
    private navCtrl: Router
  ) {}

  ngOnInit() {
    this.form.reset();
    this.warehouseService.getAll();
  }

  ngOnDestroy() {
  }

  save() {

    console.log(this.form.value);
    
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const success = (value) => {
      if (value.status == "OK") {
        this.toastr.success(value.message);
        this.navCtrl.navigateByUrl('/home/inventory-management/store');
      }
    };

    this.storeService.addStore(this.form.value, success);
  }
}
