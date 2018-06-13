import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from '@angular/router'; 
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {PopupModule} from 'ng2-opd-popup';
import {NgxPaginationModule} from 'ngx-pagination';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterhunterPipe } from './pipes/filterhunter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { DocsComponent } from './components/docs/docs.component';

const appRoutes: Routes = [
    {path:'', component:HomeComponent},
    {path:'register', component: RegisterComponent},
    {path:'login', component: LoginComponent},
    {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path:'admin', component: AdminComponent, canActivate:[AuthGuard], data: { master: true}},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'docs', component: DocsComponent},
]; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    FilterPipe,
    FilterhunterPipe,
    DocsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    PopupModule.forRoot(),
    NgxPaginationModule,
    AngularMultiSelectModule,
    OrderModule
  ],
  providers: [ValidateService, AuthService, AuthGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
