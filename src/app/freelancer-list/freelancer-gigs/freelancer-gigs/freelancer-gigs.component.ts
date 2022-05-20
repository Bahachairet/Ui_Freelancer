import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Gigs } from '../../../model/gigs';
import { GigService } from '../gig.service';

@Component({
  selector: 'app-freelancer-gigs',
  templateUrl: './freelancer-gigs.component.html',
  styleUrls: ['./freelancer-gigs.component.css']
})
export class FreelancerGigsComponent implements OnInit {
  @ViewChild('formtabs') formtabs ! : TabsetComponent  ;
  //@ViewChild('Form')  addgigfrom !: NgForm ;
  categtype : Array<string> = ['Web Design',' Design & Creative', 'Sales & Marketing','Writing & Translation','Finance & Accounting','Engineering & Architecture']

addgigform ! : FormGroup;
gege ! : Gigs;
gigsubmited !: boolean ;


  constructor(private router:Router , private fb :FormBuilder , 
    private alertify : AlertifyService , private gigservice: GigService ) { }

/* gigview  = {id:null,
idcateg:null,
firstname:null,
lastname:null, 
avgprice:null,
tags:null,
imageurl:null,
detail:null,
about:null,
favorite:null,
stars:null,
titlegig : null ,
aboutgig : null,
aboutfree:null,
discripgig:null,
photos:null


}; */
  ngOnInit(): void {
    
      this.createaddgigform();
      
    

  }

 


/*   get basicinfo(){
    return this.addgigform.controls['basicinfo'] as FormGroup ;
  }
  get dtailing(){
    return this.addgigform.controls['dtailing'] as FormGroup ;
  }
  get abouting(){
    return this.addgigform.controls['abouting'] as FormGroup ;
  } */




      onSubmit(){
        console.log(this.addgigform.value);
        this.gigsubmited = true ;
        if (this.addgigform.valid)
        {
        //this.client = Object.assign(this.client , this.registerclientForm.value);
        this.gigservice.addgig(this.gigData());
        this.addgigform.reset();
        this.gigsubmited = false ;
        this.alertify.success('Congrats , you are successfully registred');
      
      }
      else {
        this.alertify.error('Provide the required fields');
      }

      }
      createaddgigform(){
        this.addgigform = this.fb.group(
       { idcateg : [null,Validators.required],
            titlegig : [null,Validators.required],
            firstname : [null,Validators.required],
       aboutgig : [null,Validators.required],
              avgprice : [null,Validators.required],
    
         aboutfree : [null,Validators.required],
                discripgig : [null,Validators.required],
           
            
            
            photos : [null,Validators.required]
    
          }
        )
    
      }

      gigData () : Gigs {
        return this.gege = {
          categgig : this.idcateg.value,
          titlegig : this.titlegig.value,
          frename : this.firstname.value,
          aboutgig : this.aboutgig.value,
         
          pricegig : this.avgprice.value,
          aboutfree : this.aboutfree.value,
          discripgig : this.discripgig.value,
          photos : this.photos.value

        }
    
      }
      get idcateg(){
        return this.addgigform.get('idcateg') as FormControl ;
      }
      get titlegig(){
        return this.addgigform.get('titlegig') as FormControl ;
      }
      get firstname(){
        return this.addgigform.get('firstname') as FormControl ;
      }
      get aboutgig(){
        return this.addgigform.get('aboutgig') as FormControl ;
      }
      get avgprice(){
        return this.addgigform.get('avgprice') as FormControl ;
      }
      get aboutfree(){
        return this.addgigform.get('aboutfree') as FormControl ;
      }
      get discripgig(){
        return this.addgigform.get('discripgig') as FormControl ;
      }
      get photos(){
        return this.addgigform.get('photos') as FormControl ;
      }

     selecttab(tabId : number){
       this.formtabs.tabs[tabId].active = true;
     } 
     public Onback():void{

      this.router.navigate(['/gigslist'])
        }
}
