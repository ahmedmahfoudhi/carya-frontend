import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { ContactComponent } from './components/contact/contact.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { MyItemsComponent } from './components/dashboard/my-items/my-items.component';
import { AddItemComponent } from './components/dashboard/add-item/add-item.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RequestsComponent } from './components/dashboard/requests/requests.component';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarDetailsComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    OurTeamComponent,
    ContactComponent,
    BodyComponent,
    MyItemsComponent,
    AddItemComponent,
    SideNavComponent,
    DashboardComponent,
    RequestsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
