import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'ng-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email!: string;
  password!: string;
  isAuthenticated!: boolean;

  constructor(private as: AuthService, private router: Router) {}

  /**
   * build the form
   */
  ngOnInit(): void {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
  }

  /**
   * submit the form data
   */
  onSubmit(): void {
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    this.as.login(this.email, this.password).subscribe((res) => {
      if (res.success) {
        this.isAuthenticated = true
        this.router.navigate([' /dashboard']);
      } else {
        this.isAuthenticated = false;
        alert('invalid credentials')
      }
    })
  }

}

