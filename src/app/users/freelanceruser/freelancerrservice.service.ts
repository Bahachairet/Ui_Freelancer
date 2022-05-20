import { Injectable } from '@angular/core';
import { Freelancerr } from "src/app/model/freelancerr";

@Injectable({
  providedIn: 'root'
})
export class FreelancerrserviceService {

  constructor() { 
    
  }
  addfreelancerr(freelancerr: Freelancerr){
    let freelancerrs = [];
    if (localStorage.getItem('freelancerrs')){
      freelancerrs = JSON.parse(localStorage.getItem('freelancerrs')!);
      freelancerrs= [freelancerr,...freelancerrs];
    }
    else{
      freelancerrs =[freelancerr];
    }
    localStorage.setItem('freelancerrs', JSON.stringify(freelancerrs));
  }
}







   

