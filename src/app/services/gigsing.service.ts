import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Ifreelancer } from '../model/freelancer';
import { Gigs } from '../model/gigs';

@Injectable({
  providedIn: 'root'
})
export class GigsingService {

  constructor(private http : HttpClient) { }
  getallgigs(){
   return this.http.get('api/freelancers.json')
  
  }
}
