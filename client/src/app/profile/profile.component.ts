import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
import { CommonModule } from '@angular/common';
import { Auth } from '../models/auth';
import { User } from '../models/user';
import { ProfileTopComponent } from "./profile-top/profile-top.component";
import { ProfileAboutComponent } from "./profile-about/profile-about.component";
@Component({
    selector: 'ng-profile',
    standalone: true,
    imports: [CommonModule, ProfileTopComponent, ProfileAboutComponent],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    
    profile: Profile = {
        id: '',
        user: {
            id: '',
            avatar: ''
        },
        experience: {
            id: '',
            title: '',
            company: '',
            from: '',
            to: '',
        },
        education: {
            id: '',
            school: '',
            degree: '',
            fos: '',
            from: '',
            to: '',
        },
        location: '',
        website: '',
        social: {}
    };
    id: any = '';
    loading: boolean = false;
    isAuthenticated: boolean = false;
auth: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private profileService: ProfileService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    getProfileById(): void {
        this.loading = true;
        this.profileService.getProfileById(this.id).subscribe((profile: Profile) => {
          this.profile = profile
          this.loading = false
        })
    }

    goBack(): void {
      this.router.navigate(['/profiles'])
    }

    editProfile(): void {
      this.router.navigate(['/edit-profile'])
    }
}
