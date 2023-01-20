import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './_Components/about-us/about-us.component';
import { AdminComponent } from './_Components/admin/admin.component';
import { ContactUsComponent } from './_Components/contact-us/contact-us.component';
import { CreateFarmerComponent } from './_Components/create-farmer/create-farmer.component';
import { FarmerLoginComponent } from './_Components/farmer-login/farmer-login.component';
import { FarmerSignupComponent } from './_Components/farmer-signup/farmer-signup.component';
import { FarmerComponent } from './_Components/farmer/farmer.component';
import { FarmersListComponent } from './_Components/farmers-list/farmers-list.component';
import { LoginComponent } from './_Components/login/login.component';
import { SignUpComponent } from './_Components/sign-up/sign-up.component';
import { SupplierLoginComponent } from './_Components/supplier-login/supplier-login.component';
import { SupplierComponent } from './_Components/supplier/supplier.component';
import { UpdateFarmerComponent } from './_Components/update-farmer/update-farmer.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'contactus',component:ContactUsComponent},
   {path:'admin', component:AdminComponent},
   {path:'signup',component:SignUpComponent},
   {path:'login',component:LoginComponent},
   {path:'supplier-login',component:SupplierLoginComponent},
   {path:'farmer-login', component:FarmerLoginComponent},
   {path:'farmer',component:FarmerComponent},
   {path:'supplier',component:SupplierComponent},
   {path:'signup', component:SupplierComponent},
   {path:'farmer-signup', component:FarmerSignupComponent},
   {path:'farmers-list',component:FarmersListComponent},
   {path:'create-farmer', component:CreateFarmerComponent},
   {path:'update-farmer', component:UpdateFarmerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
