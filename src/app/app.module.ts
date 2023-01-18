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

import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { SingleItemComponent } from './components/items/single-item/single-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterComponent } from './components/items/filter/filter.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './components/contact/contact.component';
import { BodyComponent } from './components/dashboard/body/body.component';
import { MyItemsComponent } from './components/dashboard/my-items/my-items.component';
import { AddItemComponent } from './components/dashboard/add-item/add-item.component';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { RequestsComponent } from './components/dashboard/requests/requests.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSectionsComponent } from './components/home-sections/home-sections.component';
import { FooterComponent } from './components/footer/footer.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarDetailsComponent,
    NavbarComponent,
    LoginFormComponent,
    SignupFormComponent,
    OurTeamComponent,
    ItemsListComponent,
    SingleItemComponent,
    FilterComponent,
    SpinnerComponent,
    ContactComponent,
    BodyComponent,
    MyItemsComponent,
    AddItemComponent,
    SideNavComponent,
    DashboardComponent,
    RequestsComponent,
    HomeComponent,
    HomeSectionsComponent,
    FooterComponent,
    ItemDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    NgxSliderModule,
    FormsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-left',
      preventDuplicates: true,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
