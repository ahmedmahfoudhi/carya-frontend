import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/dashboard/add-item/add-item.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { MyItemsComponent } from './components/dashboard/my-items/my-items.component';
import { RequestsComponent } from './components/dashboard/requests/requests.component';
import { HomeComponent } from './components/home/home.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'additem',component:AddItemComponent},
  {path:'myitems',component:MyItemsComponent},
  {path:'requests',component:RequestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
