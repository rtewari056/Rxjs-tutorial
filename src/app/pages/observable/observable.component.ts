import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {

}
