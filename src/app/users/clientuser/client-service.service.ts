import { Injectable } from "@angular/core";
import { Client } from "src/app/model/client";

@Injectable({
    providedIn : 'root'
})
export class ClientServiceService {

    constructor(){

    }
    addclient(client: Client){
        let clients = [];
        if (localStorage.getItem('clients')){
          clients = JSON.parse(localStorage.getItem('clients')!);
          clients= [client,...clients];
        }
        else{
          clients =[client];
        }
        localStorage.setItem('clients', JSON.stringify(clients));
      }
}
