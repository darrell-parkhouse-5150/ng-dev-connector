import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() sixe = 0
  @Input() color = ''
}
