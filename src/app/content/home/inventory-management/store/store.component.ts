import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { StoreService } from 'src/services/inventory/store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  selected = [];
  public config: PerfectScrollbarConfigInterface = {};

  constructor(private navCtrl: Router, public service: StoreService) {

  }

  breadcrumb = {
    'mainlabel': 'Store',
    'links': [
      {
        'name': 'Store Management',
        'isLink': true,
        'link': '/home/store-management'
      },
      {
        'name': 'Store',
        'isLink': false
      }
    ]
  };

  ngOnInit() {
    this.service.getAll();
  }

  ngOnDestroy() {
  }

  newStore() {

  }

  // Table 
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
