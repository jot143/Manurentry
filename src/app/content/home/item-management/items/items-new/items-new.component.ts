import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-items-new',
  templateUrl: './items-new.component.html',
  styleUrls: ['./items-new.component.css']
})
export class ItemsNewComponent {
  breadcrumb = {
    'mainlabel': 'New Items',
    'links': [
      {
        'name': 'Item Management',
        'isLink': true,
        'link': '/home/item-management'
      },
      {
        'name': 'New Items',
        'isLink': false
      }
    ]
  };

  variantForm = () => new FormGroup({
    sku:  new FormControl('', Validators.required),

    dimensionLength: new FormControl(''),
    dimensionWidth: new FormControl(''),
    dimensionHeight: new FormControl(''),
    dimensionUnit: new FormControl('cm'),
    weight: new FormControl(''),
    weightUnit: new FormControl('cm'),
    //
    ean:  new FormControl('', Validators.required),
    hsn:  new FormControl('', Validators.required),
    mpn:  new FormControl(''),
    isbn:  new FormControl(''),
    ups:  new FormControl(''),
    //
    salePrice: new FormControl('0'),
    purchasePrice: new FormControl('0'),
    features: new FormArray([this.featureForm()]),
  });

  featureForm = () => new FormGroup({
    feature: new FormControl('', Validators.required),
    option: new FormControl('', Validators.required) 
  });

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),
    category:  new FormControl('', Validators.required),
    variants: new FormArray([this.variantForm()]),
    features: new FormArray([])
  });

  get variants() {
    return this.form.controls["variants"] as FormArray;
  }

  get features() {
    return this.form.controls["features"] as FormArray;
  }

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.form.reset();
  }

  addFeature() {
    this.features.push(new FormGroup({
      feature: new FormControl('', Validators.required),
      options: new FormControl([], Validators.required) 
    }));
  }

  onFeatureChange(e) {
    console.log(e);
  }

  onFeatureOptionChange(e) {

  }

  save() {
    console.log(this.form.value)
    this.form.markAllAsTouched();
    if(this.form.invalid) {
      return;
    }

    const success = (value) => {
      if(value.status == 'OK') {

      }
    }

    this.itemService.addItem(this.form.value, success);
  }

}
