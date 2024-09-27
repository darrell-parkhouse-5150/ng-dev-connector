import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { NgClass, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'ng-register',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, HttpClientModule, NgClass, NgIf],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    providers: [AuthService]
})
export class RegisterComponent implements OnInit, OnDestroy {
    registerForm!: FormGroup;
    submitted: boolean = false;
    private unsubscribe$ = new Subject<void>();
    name!: string|null;

    constructor(
        private router: Router,
        private auth: AuthService,
        private as: AlertService
    ) {}

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            name: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
            confpass: new FormControl('', Validators.required),
        });
    }

    get f() {
        return this.registerForm.controls;
    }

    onSubmit(): void {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        if (this.f['password'].value !== this.f['confpass'].value) {
            this.as.error('Passwords do not match');
            return;
        }

        this.auth
            .register(
                this.f['name'].value,
                this.f['email'].value,
                this.f['password'].value
            )
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(
                (data) => {
                    this.as.success('Registration successful');
                    this.router.navigate(['/login']);
                },
                (error) => {
                    this.as.error(error);
                }
            );
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
