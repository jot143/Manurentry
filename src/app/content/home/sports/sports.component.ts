import { AppService } from 'src/controller/service/app.service';
import { Component } from '@angular/core';
import { NavCtrlService } from 'src/controller/utility/nav-ctrl.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  
  breadcrumb = {
    mainlabel: "Sport",
    links: [
      {
        'name': 'Inventory',
        'isLink': true,
        'link': '/home'
      }
    ]

  };

  constructor(public appService: AppService, private navCtrl: NavCtrlService) {
    
  }

  goto(sport) {
    this.navCtrl.goTo('/home/'+module+'/'+sport)
  }
}
