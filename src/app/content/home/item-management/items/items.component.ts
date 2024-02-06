import { AppService } from 'src/controller/service/app.service';
import { Component } from '@angular/core';
import { Item } from 'src/controller/model/Item';
import { ItemService } from 'src/services/item/item.service';
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

  constructor(private navCtrl: Router, public service: ItemService, private appService: AppService) {

  }

  breadcrumb = {
    'mainlabel': this.appService.routeObservable.value.category,
    'links': [
      {
        'name': 'Stock List',
        'isLink': false,
      }
    ]
  };

  ngOnInit() {
    this.service.getAll({params: { category: this.appService.routeObservable.value.category}});
  }

  ngOnDestroy() {
  }

  gotoNewItemPage() {
    this.navCtrl.navigateByUrl('/home/inventory/'+this.appService.routeObservable.value.category+'/item-management/items-new');
  }

  // Table 
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  edit(row) {

  }

  deleteRow(row) {
    
  }
}
