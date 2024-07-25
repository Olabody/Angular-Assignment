import { Component } from '@angular/core';
import { STAFF } from './staff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Assignment';
  User = 'Bode';
  Staff = STAFF;
}
