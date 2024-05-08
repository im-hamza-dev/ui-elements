import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CardsWrapperComponent } from './components/cards-wrapper/cards-wrapper.component';
import { CategoriesModule } from './features/categories/categories.module';

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
  // {
  //   path: 'categories',
  //   component: CategoriesModule,
  // },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
