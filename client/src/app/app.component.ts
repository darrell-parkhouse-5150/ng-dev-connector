import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertType } from './models/AlertTypes';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { NgModel } from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { ButtonComponent } from "./button/button.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegisterComponent, UserListComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
  success!: AlertType;
}
