import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { CustomCardComponent } from '../components/custom-card/custom-card.component';


const routes:Route = [
  {
    path:'categories',
    component:CustomCardComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
