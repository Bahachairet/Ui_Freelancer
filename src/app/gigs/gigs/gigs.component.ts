import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ifreelancer } from 'src/app/model/freelancer';
import { Gigs } from 'src/app/model/gigs';
import { GigsingService } from 'src/app/services/gigsing.service';
import { GigsDetailComponent } from './gigs-detail/gigs-detail/gigs-detail.component';

@Component({
  selector: 'app-gigs',
  templateUrl: './gigs.component.html',
  styleUrls: ['./gigs.component.css']
})
export class GigsComponent implements OnInit {


  gigs ! : any ;

  constructor(private gigsing : GigsingService) { }

  ngOnInit(): void {
  this.gigsing.getallgigs().subscribe(
    data =>{
      this.gigs=data ;
    },error=>{
      console.log(error);
    }
    
  );

  }

}
