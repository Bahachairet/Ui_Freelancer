import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localTN from '@angular/common/locales/ar-TN';
import{HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FreelancerListComponent } from './freelancer-list/freelancer-list.component';
import { ReplaceComma } from './shared/pipes/replace.pipe';
import { StartRatingComponent } from './shared/pipes/component/star-rating/star-rating.component';
import { HomeComponent } from './home/home.component';
import { FreelancerDetailComponent } from './freelancer-list/freelancer-detail/freelancer-detail.component';
import { RouterModule } from '@angular/router';
import { HomeDetailComponent } from './home/home-detail/home-detail/home-detail.component';
import { FreelancerGigsComponent } from './freelancer-list/freelancer-gigs/freelancer-gigs/freelancer-gigs.component';
import { FreelanceruserRegisterComponent } from './users/freelanceruser/freelanceruser-register/freelanceruser-register.component';
import { FreelanceruserLoginComponent } from './users/freelanceruser/freelanceruser-login/freelanceruser-login.component';
import { ClientuserRegisterComponent } from './users/clientuser/clientuser-register/clientuser-register.component';
import { ClientuserLoginComponent } from './users/clientuser/clientuser-login/clientuser-login.component';
import { ChoseComponent } from './users/chose/chose/chose.component';
import { LoginAsComponent } from './users/chose/login-as/login-as.component';
import { ClientServiceService } from './users/clientuser/client-service.service';

import { AlertifyService } from './services/alertify.service';
import { FreelancerrserviceService } from './users/freelanceruser/freelancerrservice.service';

import{ConfirmedValidator} from 'src/app/users/clientuser/clientuser-register/confirmed.validator'
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{BsDropdownModule} from 'ngx-bootstrap/dropdown' ;
import { TabsModule } from 'ngx-bootstrap/tabs';
import { GigsComponent } from './gigs/gigs/gigs.component';
import { GigsCardComponent } from './gigs/gigs/gigs-card/gigs-card/gigs-card.component';
import { GigsDetailComponent } from './gigs/gigs/gigs-detail/gigs-detail/gigs-detail.component';
import { GigsingService } from './services/gigsing.service';

registerLocaleData(localTN, 'TN')

@NgModule({
  declarations: [
    AppComponent,
    FreelancerListComponent,
    ReplaceComma,
    StartRatingComponent,
    HomeComponent,
    FreelancerDetailComponent,
    HomeDetailComponent,
    FreelancerGigsComponent,
    FreelanceruserRegisterComponent,
    FreelanceruserLoginComponent,
    ClientuserRegisterComponent,
    ClientuserLoginComponent,
    ChoseComponent,
    LoginAsComponent,
    NavbarComponent,
    GigsComponent,
    GigsCardComponent,
    GigsDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component : HomeComponent},
      {path:'',redirectTo :'home',pathMatch:'full'},
      {path : 'freelancers/:id',component : FreelancerDetailComponent},
      {path : 'categories/:idcateg',component : HomeDetailComponent},
      {path : 'freelancers',component:FreelancerListComponent},

      {path : 'login',component:LoginAsComponent},
      {path : 'signup',component:ChoseComponent},



      {path : 'clientlogin',component:ClientuserLoginComponent},
      {path : 'clientregister',component:ClientuserRegisterComponent},
      
      {path : 'freelancerlogin',component:FreelanceruserLoginComponent},
      {path : 'freelancerregister',component:FreelanceruserRegisterComponent},

      {path : 'gigcard',component:GigsCardComponent},
      {path : 'gigslist',component:GigsComponent},
      {path : 'gigsdetail/:id',component:GigsDetailComponent},


      {path : 'addgigs',component:FreelancerGigsComponent},
      {path:'**',redirectTo:'home',pathMatch:'full'}
     
    ]),
  ],
  providers: [ClientServiceService,AlertifyService,
    FreelancerrserviceService,AuthService,GigsingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
