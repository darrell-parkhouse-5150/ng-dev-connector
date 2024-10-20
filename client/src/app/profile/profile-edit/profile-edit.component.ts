import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileTopComponent } from '../profile-top/profile-top.component';
import { ProfileAboutComponent } from '../profile-about/profile-about.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'ng-profile-edit',
  standalone: true,
  imports: [NgIf, ProfileTopComponent, ProfileAboutComponent],
  templateUrl: './profile-edit.component.html',
  styleUrl: './profile-edit.component.scss'
})
export class ProfileEditComponent {
    @Input() loading: boolean = false
    profileObj: Profile = {};
    isAuthenticated: boolean = false
    editProfileForm!: FormGroup

auth: any;

    constructor(private ps: ProfileService) {}

    fetchProfile(): void {
        this.ps.getProfiles()
            .subscribe((profile: any) => {
                this.profileObj = profile
            }, (error: any) => {
                console.error(error);
            })
    }

    editProfile() {}
    initForm() {}
    goBack() {}
}
