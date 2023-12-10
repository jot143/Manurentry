import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { FeatureService } from 'src/services/item/feature.service';
import { ItemService } from 'src/services/item/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    city: new FormControl("", Validators.required),
    province: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),
    postalCode: new FormControl("", Validators.required),
    latitude: new FormControl("", Validators.required),
    longitude: new FormControl("", Validators.required),
  });

  constructor(
    private itemService: ItemService,
    public featureService: FeatureService,
    private toastr: ToastrService,
    private navCtrl: Router
  ) {}

  ngOnInit() {
    this.form.reset();
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
        this.navCtrl.navigateByUrl('/home/item-management');
      }
    };

    const data = this.form.value;
    this.itemService.addItem(this.form.value, success);
  }
}
