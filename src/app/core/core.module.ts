import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink ,RouterOutlet} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule,  RouterOutlet,RouterLink],
  exports: [HeaderComponent],
})
export class CoreModule {}
