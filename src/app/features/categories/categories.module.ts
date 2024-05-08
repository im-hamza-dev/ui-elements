import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    CategoriesComponent,
    ListCategoriesComponent, // added to resolve 'can't bind to ngForOf', components used in subroutes have to be added in declarations
    AddCategoriesComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgFor,
    HttpClientModule,
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {}
