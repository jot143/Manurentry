import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  @BlockUI('changelog') blockUIChangelog: NgBlockUI;

  public breadcrumb: any;
  options = {
    close: true,
    expand: true,
    minimize: true,
    reload: true
  };

  constructor() { }

  ngOnInit() {
    this.breadcrumb = {
      'mainlabel': 'ChangeLog',
      'links': [
        {
          'name': 'Home',
          'isLink': true,
          'link': '/dashboard/sales'
        },
        {
          'name': 'ChangeLog',
          'isLink': false,
          'link': '#'
        },
      ]
    };
  }

  reloadChangelog() {
    this.blockUIChangelog.start('Loading..');

    setTimeout(() => {
      this.blockUIChangelog.stop();
    }, 2500);
  }
}
