import { Routes } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    }
];
