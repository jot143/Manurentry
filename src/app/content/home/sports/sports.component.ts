import { ActivatedRoute } from '@angular/router';
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

  constructor(public appService: AppService, private navCtrl: NavCtrlService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.appService.routeObservable.next(this.route.snapshot.params);
  }

  goto(sport) {
    this.navCtrl.goTo('/home/' + this.appService.routeObservable.value.module + '/' + sport)
  }
}
