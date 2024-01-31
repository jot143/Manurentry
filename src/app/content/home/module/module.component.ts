import { AppService } from 'src/controller/service/app.service';
import { Component } from '@angular/core';
import { NavCtrlService } from 'src/controller/utility/nav-ctrl.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  
  breadcrumb = {
    mainlabel: "Home"
  };


  constructor(public appService: AppService, private navCtrl: NavCtrlService) {
    
  }

  goto(module) {
    this.navCtrl.goTo('/home/'+module)
  }
}
