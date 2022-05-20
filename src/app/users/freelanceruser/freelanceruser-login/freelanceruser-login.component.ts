import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-freelanceruser-login',
  templateUrl: './freelanceruser-login.component.html',
  styleUrls: ['./freelanceruser-login.component.css']
})
export class FreelanceruserLoginComponent implements OnInit {

  constructor(private authService : AuthService , private alertify : AlertifyService , private router : Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm : NgForm){
    console.log(loginForm.value);
   const token1 = this.authService.authuser(loginForm.value) ;
   if (token1) {
     localStorage.setItem('token',token1.username)
     this.alertify.success('login suuccessfull') ;
     this.router.navigate(['/']);
   }
   else {
    this.alertify.error('Somthing Wrong !! Please Try Again') ;
   }

  }

}
