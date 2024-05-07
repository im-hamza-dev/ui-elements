import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CardsWrapperComponent } from './components/cards-wrapper/cards-wrapper.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,  CardsWrapperComponent, CoreModule, AppRoutingModule], // coreModule injected in app
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui-elements';
}
