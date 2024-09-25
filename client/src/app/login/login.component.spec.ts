import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let AuthService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceApy = jasmin.createSpyObj('AuthService', ['login'])
    await TestBed.configureTestingModule({
      imports: [LoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


describe('LoginComponent', () => {
  let component: LoginComponent;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        { provide: AuthService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    component = TestBed.createComponent(LoginComponent).componentInstance;
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    component.ngOnInit();
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });

  it('should validate email', () => {
    component.ngOnInit();
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.invalid).toBeTrue();
    emailControl?.setValue('invalidEmail');
    expect(emailControl?.invalid).toBeTrue();
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.valid).toBeTrue();
  });

  it('should validate password', () => {
    component.ngOnInit();
    const passwordControl = component.loginForm.get('password');
    passwordControl?.setValue('');
    expect(passwordControl?.invalid).toBeTrue();
    passwordControl?.setValue('short');
    expect(passwordControl?.invalid).toBeTrue();
    passwordControl?.setValue('longEnoughPassword');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('should call login on submit', () => {
    component.ngOnInit();
    const email = 'test@email.com';
    const password = 'password';
    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);
    authService.login.and.returnValue(of({ success: true }));
    component.onSubmit();
    expect(authService.login).toHaveBeenCalledWith(email, password);
  });

  it('should navigate to dashboard on successful login', () => {
    component.ngOnInit();
    const email = 'test@email.com';
    const password = 'password';
    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);
    authService.login.and.returnValue(of({ success: true }));
    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should show alert on failed login', () => {
    component.ngOnInit();
    const email = 'test@email.com';
    const password = 'password';
    component.loginForm.get('email')?.setValue(email);
    component.loginForm.get('password')?.setValue(password);
    authService.login.and.returnValue(of({ success: false }));
    spyOn(window, 'alert');
    component.onSubmit();
    expect(window.alert).toHaveBeenCalledWith('invalid credentials');
  });
});