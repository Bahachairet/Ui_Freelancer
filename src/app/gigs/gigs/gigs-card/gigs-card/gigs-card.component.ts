import { Component, Input, OnInit } from '@angular/core';
import { Ifreelancer } from 'src/app/model/freelancer';

@Component({
  selector: 'app-gigs-card',
  templateUrl: './gigs-card.component.html',
  styleUrls: ['./gigs-card.component.css']
})
export class GigsCardComponent implements OnInit {
  @Input() gig__ : any ;



  constructor() { }

  ngOnInit(): void {
  }

}
