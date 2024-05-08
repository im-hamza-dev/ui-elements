import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ListCategoriesComponent],
  imports: [
    CommonModule,HttpClientModule
  ]
})
export class CategoriesModule { }
