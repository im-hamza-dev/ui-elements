import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { CategoriesComponent } from './categories.component';

const routes: Route[] = [
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      {
        path: 'add',
        component: AddCategoriesComponent,
      },
      {
        path: 'list',
        component: ListCategoriesComponent,
      },
      {
        path: '',
        component: ListCategoriesComponent,
      },
    ],
  },
  // {
  //   path: 'list',
  //   component: ListCategoriesComponent,
  // },
  // {
  //   path: 'add',
  //   component: AddCategoriesComponent,
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
