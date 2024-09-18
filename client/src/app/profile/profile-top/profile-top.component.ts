import { Component, Input  } from '@angular/core';
import { Profile } from '../../models/profile';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'ng-profile-top',
  standalone: true,
  imports: [NgIf, CommonModule, NgFor],
  templateUrl: './profile-top.component.html',
  styleUrl: './profile-top.component.scss'
})
export class ProfileTopComponent {
[x: string]: any;
  @Input()
  profile!: Profile;
  getSocialLinks() {
    return Object.entries(this.profile.social)
      .filter(([_, value]) => value)
      .map(([key, value]) => ({ key, value}))
  }
}
