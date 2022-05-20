import { Injectable } from "@angular/core";
import {  Gigs } from "src/app/model/gigs";

@Injectable({
    providedIn : 'root'
})
export class GigService {

    constructor(){

    }
    addgig(gig: Gigs){
        let gigs = [];
        if (localStorage.getItem('gigs')){
          gigs = JSON.parse(localStorage.getItem('gigs')!);
          gigs= [gig,...gigs];
        }
        else{
          gigs =[gig];
        }
        localStorage.setItem('gigs', JSON.stringify(gigs));
      }
}