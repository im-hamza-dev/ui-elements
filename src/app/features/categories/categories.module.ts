import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';



@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule
  ]
})
export class CategoriesModule { }
