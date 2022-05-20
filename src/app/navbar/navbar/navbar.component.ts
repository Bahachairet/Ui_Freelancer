import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

loggedinclient  : any ;

  constructor(private alertify : AlertifyService) { }

  ngOnInit(): void {
  }
  loggedin(){
  this.loggedinclient  = localStorage.getItem('token');
  return this.loggedinclient ;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alertify.success("You Logged Out")

  }

}
