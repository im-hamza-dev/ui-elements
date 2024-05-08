import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { CardsWrapperComponent } from './components/cards-wrapper/cards-wrapper.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesModule } from './features/categories/categories.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent], // components under this module
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CardsWrapperComponent,
    CategoriesModule,
  ],// coreModule, routingModule,. etc injected in app
  bootstrap:[AppComponent]
})
export class AppModule { }
