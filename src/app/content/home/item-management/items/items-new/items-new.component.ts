import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/services/category.service';
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

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    sku:  new FormControl('', Validators.required),
    unit: new FormControl('', Validators.required),

    category:  new FormControl('', Validators.required),

    color:   new FormControl(''),
    size:    new FormControl(''),

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
    purchasePrice: new FormControl('0')
  });

  constructor(private itemService: ItemService) {

  }

  ngOnInit() {
    this.form.reset();
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
