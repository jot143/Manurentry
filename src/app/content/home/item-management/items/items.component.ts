import { Component } from '@angular/core';
import { Item } from 'src/controller/model/Item';
import { ItemService } from 'src/services/item.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  selected = [];
  public config: PerfectScrollbarConfigInterface = { };

  constructor(private navCtrl: Router, public service: ItemService) {

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

  ngOnInit() {
    this.service.getAll();
  }

  ngOnDestroy() {
  }

  gotoNewItemPage() {
    this.navCtrl.navigateByUrl('/home/item-management/items-new');
  }

  // Table 
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
