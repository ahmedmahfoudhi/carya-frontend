import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddItemComponent } from './components/dashboard/add-item/add-item.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MyItemsComponent } from './components/dashboard/my-items/my-items.component';
import { RequestsComponent } from './components/dashboard/requests/requests.component';
import { HomeSectionsComponent } from './components/home-sections/home-sections.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomeSectionsComponent },
      { path: 'properties', component: ItemsListComponent },
      { path: 'properties', component: ItemsListComponent },
    ],
  },
  { path: '', component: OurTeamComponent },
  { path: '', component: ContactComponent },
  {
    path: 'user',
    component: DashboardComponent,
    children: [
      { path: 'my-items', component: MyItemsComponent },
      { path: 'add-item', component: AddItemComponent },
      { path: 'requests', component: RequestsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
