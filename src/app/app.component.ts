import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsWrapperComponent } from './components/cards-wrapper/cards-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui-elements';
}
