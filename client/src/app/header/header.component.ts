import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";

@Component({
  selector:'ng-header',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
