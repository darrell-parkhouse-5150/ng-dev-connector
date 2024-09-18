import { Component, Input  } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'ng-profile-top',
  standalone: true,
  imports: [],
  templateUrl: './profile-top.component.html',
  styleUrl: './profile-top.component.scss'
})
export class ProfileTopComponent {
  @Input()
  profile!: Profile;
  getSocialLinks() {
    return Object.entries(this.profile.social)
      .filter(([_, value]) => value)
      .map(([key, value]) => ({ key, value}))
  }
}
