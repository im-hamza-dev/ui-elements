import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CardsWrapperComponent } from './components/cards-wrapper/cards-wrapper.component';
import { CategoriesModule } from './features/categories/categories.module';
import { ListCategoriesComponent } from './features/categories/list-categories/list-categories.component';

const routes: Route[] = [
  // {
  //   path:'',
  //   redirectTo:'/categories',
  //   component:CategoriesModule
  // },
    {
    path: '',
    component: CardsWrapperComponent,
  },
  {
    path: 'categories',
    component: ListCategoriesComponent,
  },

  
];
@NgModule({
   imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
