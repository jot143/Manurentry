import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() rightSideControls: TemplateRef<HTMLElement>;
  @Input() breadcrumb: object;

  constructor() { }

  ngOnInit() {
    this.processBreadCrumbLinks();
  }
  private processBreadCrumbLinks() {
  }
}
