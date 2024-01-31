import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'src/app/_services/device-detector.service';
import { NavbarService } from 'src/app/_services/navbar.service';
import { ThemeSettingsService } from '../settings/theme-settings.service';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.css']
})
export class ViewLayoutComponent {

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private navbarService: NavbarService,
    private _themeSettingsService: ThemeSettingsService,
    private deviceService: DeviceDetectorService) {

  }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'bg-full-screen-image');
    this.renderer.addClass(document.body, 'fixed-navbar');
  }
}
