import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'ng-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
