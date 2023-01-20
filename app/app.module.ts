import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './_Components/navbar/navbar.component';
import { AdminComponent } from './_Components/admin/admin.component';
import { LoginComponent } from './_Components/login/login.component';
import { SignUpComponent } from './_Components/sign-up/sign-up.component';
import { FarmerComponent } from './_Components/farmer/farmer.component';
import { SupplierComponent } from './_Components/supplier/supplier.component';
import { FarmerLoginComponent } from './_Components/farmer-login/farmer-login.component';
import { SupplierLoginComponent } from './_Components/supplier-login/supplier-login.component';
import { FarmerSignupComponent } from './_Components/farmer-signup/farmer-signup.component';
import { FarmersListComponent } from './_Components/farmers-list/farmers-list.component';
import { CreateFarmerComponent } from './_Components/create-farmer/create-farmer.component';
import { UpdateFarmerComponent } from './_Components/update-farmer/update-farmer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LoginComponent } from './_Components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    SignUpComponent,
    FarmerComponent,
    SupplierComponent,
    FarmerLoginComponent,
    SupplierLoginComponent,
    FarmerSignupComponent,
    FarmersListComponent,
    CreateFarmerComponent,
    UpdateFarmerComponent,
    // LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
