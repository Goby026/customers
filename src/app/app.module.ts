import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//rutas
import { APP_ROUTING } from './app.routes';

//componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { QuotationsComponent } from './pages/quotations/quotations.component';
import { NavComponent } from './shared/nav/nav.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { NavVerticalComponent } from './shared/nav-vertical/nav-vertical.component';
import { RegisterComponent } from './pages/register/register.component';

//Servicios
import { UsuarioService } from './services/usuario/usuario.service';

//Guards
import { LoginGuardGuard } from './services/guards/login-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuotationsComponent,
    NavComponent,
    CustomersComponent,
    NavVerticalComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    APP_ROUTING
  ],
  providers: [
    UsuarioService,
    LoginGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
