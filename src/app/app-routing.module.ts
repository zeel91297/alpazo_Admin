import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdvserisementsComponent } from './advserisements/advserisements.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ToBeAcceptedComponent } from './to-be-accepted/to-be-accepted.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'advertisements', component: AdvserisementsComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'advertisements', component: AdvertisementsComponent},
  {path: 'add-advertisement', component: AddAdvertisementComponent},
  {path: 'edit-advertisement/:id', component: EditAdvertisementComponent},
  {path: 'pending-orders', component: PendingOrdersComponent},
  {path: 'past-orders', component: PastOrdersComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-inventory/:id', component: UpdateInventoryComponent},
  {path: 'add-service', component: AddServiceComponent},
  {path: 'update-service/:id', component: UpdateServiceComponent},
  {path: 'tobeAccepted', component: ToBeAcceptedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

/* export const routingComponents = [DashboardComponent]; */
