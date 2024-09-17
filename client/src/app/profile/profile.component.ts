import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../models/profile';
@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
    profile: Profile = {
        id: '',
        user: {},
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
    };
    id: any = '';
    loading: boolean = false;
    isAuthenticated: boolean = false;

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
