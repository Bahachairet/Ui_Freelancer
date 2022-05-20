import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  authclient(client : any){
    let clientArray = [];
    if (localStorage.getItem('clients')) {
      clientArray = JSON.parse(localStorage.getItem('clients')!);
    }
    return clientArray.find((p: { clientfname: any; clientpw: any; }) => p.clientfname === client.clientfname && p.clientpw === client.clientpw);

  }

  authuser(user : any){
    let userArray = [];
    if (localStorage.getItem('freelancerrs')) {
      userArray = JSON.parse(localStorage.getItem('freelancerrs')!);
    }
    return userArray.find((p: { username: any; userpw: any; }) => p.username === user.username && p.userpw === user.userpw);

  }
}
