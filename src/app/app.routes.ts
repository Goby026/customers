import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { RegisterComponent } from './pages/register/register.component';

import { LoginGuardGuard } from './services/guards/login-guard.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const APP_ROUTES: Routes = [
{ path:'login', component: LoginComponent },
{ path:'register', component: RegisterComponent },
{ path:'profile', component: ProfileComponent, canActivate: [LoginGuardGuard] },
{ path:'quotations', component: QuotationsComponent, canActivate: [LoginGuardGuard] },
{ path:'customers', component: CustomersComponent, canActivate: [LoginGuardGuard] },
{ path:'**', pathMatch:'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);