import { Component, Renderer2 } from '@angular/core';

import { AppService } from 'src/controller/service/app.service';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.css']
})
export class ViewLayoutComponent {

  constructor(private renderer: Renderer2,
    private appService: AppService) {

  }

  ngOnInit() {
    this.appService.initHome();
    this.renderer.removeClass(document.body, 'bg-full-screen-image');
    this.renderer.addClass(document.body, 'fixed-navbar');
  }
}
