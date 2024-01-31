import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { CoreService } from 'src/controller/service/core.service';
import { FeatureService } from 'src/services/item/feature.service';
import { ItemService } from 'src/services/item/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WarehouseService } from 'src/services/inventory/warehouse.service';

@Component({
  selector: 'app-warehouse-new',
  templateUrl: './warehouse-new.component.html',
  styleUrls: ['./warehouse-new.component.css']
})
export class WarehouseNewComponent {
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
    address: new FormControl("", Validators.required),
    city: new FormControl("1", Validators.required),
    province: new FormControl("1", Validators.required),
    country: new FormControl("1", Validators.required),
    postalCode: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required),
  });

  constructor(
    private warehouseService: WarehouseService,
    public featureService: FeatureService,
    private toastr: ToastrService,
    private navCtrl: Router,
    public coreService: CoreService
  ) {}

  ngOnInit() {
    this.form.reset();
    this.coreService.countryIndex();
    this.coreService.provinceIndex();
    this.coreService.cityIndex();
  }

  ngOnDestroy() {
  }

  save() {
    
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    const success = (value) => {
      if (value.status == "OK") {
        this.toastr.success(value.message);
        this.navCtrl.navigateByUrl('/home/inventory-management/warehouse');
      }
    };

    this.warehouseService.addWarehouse(this.form.value, success);
  }
}
