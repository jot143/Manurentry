import { Component } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { RawItemService } from 'src/services/raw-item/item-raw.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  selected = [];
  public config: PerfectScrollbarConfigInterface = { };

  constructor(private navCtrl: Router, public service: RawItemService) {

  }

  breadcrumb = {
    'mainlabel': 'Raw Items',
    'links': [
      {
        'name': 'Raw Item Management',
        'isLink': true,
        'link': '/home/raw-item-management'
      },
      {
        'name': 'Raw Items',
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
    this.navCtrl.navigateByUrl('/home/raw-item-management/items-new');
  }

  // Table 
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
}
