import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/services/inventory/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent {

  selected = [];
  public config: PerfectScrollbarConfigInterface = { };

  constructor(private navCtrl: Router, public service: WarehouseService) {

  }

  breadcrumb = {
    'mainlabel': 'Warehouse',
    'links': [
      {
        'name': 'Warehouse Management',
        'isLink': true,
        'link': '/home/warehouse-management'
      },
      {
        'name': 'Warehouse',
        'isLink': false
      }
    ]
  };

  ngOnInit() {
    this.service.getAll();
  }

  ngOnDestroy() {
  }

  newWarehouse() {
    
  }

  // Table 
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
