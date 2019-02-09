import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpHeaders } from '@angular/common/http';

import {
  MatButtonModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdvserisementsComponent } from './advserisements/advserisements.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddAdvertisementComponent } from './add-advertisement/add-advertisement.component';
import { EditAdvertisementComponent } from './edit-advertisement/edit-advertisement.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { PastOrdersComponent } from './past-orders/past-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddbService } from './providers/advertisedb/addb_service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdvserisementsComponent,
    HeaderComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    AddAdvertisementComponent,
    EditAdvertisementComponent,
    AdvertisementsComponent,
    PastOrdersComponent,
    PendingOrdersComponent,
    AddProductComponent,
    UpdateInventoryComponent,
    AddServiceComponent,
    UpdateServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [ AddbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
