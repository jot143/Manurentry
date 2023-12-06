import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ItemsComponent } from './items/items.component';
import { ItemsEditComponent } from './items/items-edit/items-edit.component';
import { ItemsNewComponent } from './items/items-new/items-new.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'items-new',
    component: ItemsNewComponent
  },
  {
    path: 'items-edit',
    component: ItemsEditComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RawItemManagementRoutingModule { }
