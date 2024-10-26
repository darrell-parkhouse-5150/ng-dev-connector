import { Component, Input, OnInit } from '@angular/core';
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
export class ProfileEditComponent implements OnInit {
    @Input() loading: boolean = false
    profileObj: Profile = {};
    editProfileForm!: FormGroup



    constructor(private ps: ProfileService) {}

    ngOnInit(): void {
        this.initForm();
        this.fetchProfile();
    }
    

    fetchProfile(): void {
        this.ps.getProfiles()
            .subscribe((profile: any) => {
                this.profileObj = profile
                this.updateFormWithData(profile)
            }, (error: any) => {
                console.error('error fetching data', error);
            })
    }

    initForm() {
        this.editProfileForm = new FormGroup({
            user: new FormControl(this.profileObj.user, [Validators.required]),
            email: new FormControl(this.profileObj.email, [
                Validators.required, 
                Validators.email
            ]),
            experience: new FormControl(this.profileObj.experience, Validators.required),
            education: new FormControl(this.profileObj.education, Validators.required),
            location: new FormControl(this.profileObj.location, Validators.required),
            status: new FormControl(this.profileObj.status, Validators.required),
            social: new FormControl(this.profileObj.social, Validators.required)
        })
    }
    goBack() {}

    updateFormWithData(profile: Profile) {
        this.editProfileForm.patchValue({
            user: profile.user,
            email: profile.email,
            experience: profile.experience,
            education: profile.education,
            location: profile.location,
            website: profile.website,
            status: profile.status,
            social: profile.social
        })
    }
}
