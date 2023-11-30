import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  breadcrumb = {
    'mainlabel': 'Home',
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
