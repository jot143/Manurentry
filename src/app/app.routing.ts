import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { ChangelogComponent } from './content/changelog/changelog.component';
import { HomeComponent } from './content/home/dashboard/home.component';
import { LoginComponent } from './login';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';

const appRoutes: Routes = [
  // Public layout
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // Private layout
  {
    path: 'home',
    component: PrivateLayoutComponent,
    children: [
      { 
        path: '', 
        component: HomeComponent
      },
      { 
        path: 'item-management', 
        loadChildren: () => import('./content/home/item-management/item-management.module').then(m => m.ItemManagementModule)
      },
      { 
        path: 'raw-item-management', 
        loadChildren: () => import('./content/home/raw-item-management/raw-item-management.module').then(m => m.RawItemManagementModule)
      },
      { 
        path: 'logout', 
        component: LoginComponent
      },
    ],
    canActivate: [AuthGuard],
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top'});
