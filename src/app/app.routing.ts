import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';
import { ChangelogComponent } from './content/changelog/changelog.component';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';
import { HomeComponent } from './content/home/dashboard/home.component';
import { LoginComponent } from './login';
import { ModuleComponent } from './content/home/module/module.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { SportsComponent } from './content/home/sports/sports.component';
import { ViewLayoutComponent } from './_layout/view-layout/view-layout.component';

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
    component: ViewLayoutComponent,
    children: [
      {
        path: '',
        component: ModuleComponent
      },
      {
        path: ':module',
        component: SportsComponent
      },
      {
        path: 'inventory/:category',
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
            path: 'inventory-management', 
            loadChildren: () => import('./content/home/inventory-management/inventory-management.module').then(m => m.InventoryManagementModule)
          },
          { 
            path: 'logout', 
            component: LoginComponent
          },
        ],
        canActivate: [AuthGuard],
      },
    ]
  },
 
  // otherwise redirect to home
  { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes, { scrollOffset: [0, 0], scrollPositionRestoration: 'top'});
