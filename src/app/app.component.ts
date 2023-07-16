import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'RxJS-Series';
}
