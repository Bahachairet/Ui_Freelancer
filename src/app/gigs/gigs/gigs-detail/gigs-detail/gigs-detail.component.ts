import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gigs-detail',
  templateUrl: './gigs-detail.component.html',
  styleUrls: ['./gigs-detail.component.css']
})
export class GigsDetailComponent implements OnInit {
  public gigid !: number;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.gigid= this.route.snapshot.params['id'];
  }

}
