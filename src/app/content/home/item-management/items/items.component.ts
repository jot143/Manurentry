import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  constructor(private navCtrl: Router) {

  }

  breadcrumb = {
    'mainlabel': 'Items',
    'links': [
      {
        'name': 'Item Management',
        'isLink': true,
        'link': '/home/item-management'
      },
      {
        'name': 'Items',
        'isLink': false
      }
    ]
  };

  gotoNewItemPage() {
    this.navCtrl.navigateByUrl('/home/item-management/items-new');
  }
}
