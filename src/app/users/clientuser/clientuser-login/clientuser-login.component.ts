import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-clientuser-login',
  templateUrl: './clientuser-login.component.html',
  styleUrls: ['./clientuser-login.component.css']
})
export class ClientuserLoginComponent implements OnInit {

  constructor(private authService : AuthService , private alertify : AlertifyService , private router : Router) { }

  ngOnInit(): void {
  }
  onLogin(loginForm : NgForm){
    console.log(loginForm.value);
   const token = this.authService.authclient(loginForm.value) ;
   if (token) {
     localStorage.setItem('token',token.clientfname)
     this.alertify.success('login suuccessfull') ;
     this.router.navigate(['/']);
   }
   else {
    this.alertify.error('Somthing Wrong !! Please Try Again') ;
   }

  }

}
