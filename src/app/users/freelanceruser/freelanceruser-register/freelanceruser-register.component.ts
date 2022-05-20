import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Freelancerr } from 'src/app/model/freelancerr';

import { FreelancerrserviceService } from '../freelancerrservice.service';
import{ConfirmedValidator} from 'src/app/users/clientuser/clientuser-register/confirmed.validator'

import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-freelanceruser-register',
  templateUrl: './freelanceruser-register.component.html',
  styleUrls: ['./freelanceruser-register.component.css']
})
export class FreelanceruserRegisterComponent implements OnInit {

  user ! : Freelancerr ;
  usersubmited !: boolean ;

  registeruserForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService : FreelancerrserviceService, 
    private alertify : AlertifyService) { }

  ngOnInit(): void {
    /* this.registerclientForm = new FormGroup({
      clientfname: new FormControl(null ,[Validators.required,Validators.minLength(3)]),
      clientlname: new FormControl(null , [Validators.required,Validators.minLength(3)]),
      clientemail: new FormControl(null , [Validators.required,Validators.email]),
      clientpw : new FormControl(null , [Validators.required,Validators.minLength(8)]),
      clientcpw : new FormControl(null , [Validators.required,Validators.minLength(8)]),
      clientmobile : new FormControl(null , [Validators.required,Validators.minLength(8)]) */
     this.createregfrom();

    }/*) , { 
      validator: ConfirmedValidator('clientpw', 'clientcpw')
    }; */
  
    createregfrom(){
    this.registeruserForm = this.fb.group({
      username : [null ,[Validators.required,Validators.minLength(3)]],
     
      useremail : [null , [Validators.required,Validators.email]],
      userpw  : [null , [Validators.required,Validators.minLength(8)]],
      usercpw : [null , [Validators.required,Validators.minLength(8)]],
      userdescription : [null , [Validators.required,Validators.minLength(10)]],
      useroccupation : [null , [Validators.required,Validators.minLength(10)]],
     

  }, { 
    validator: ConfirmedValidator('userpw', 'usercpw')});
}
      

 /*  vali(fg: FormGroup) : Validators{
    return fg.get('clientpw').value === fg.get('clientcpw').value  ? null :
    {notmtached : true} ;

  } */

  onSubmit(){
    
    console.log(this.registeruserForm.value);
    this.usersubmited = true ;
    if (this.registeruserForm.valid)
    {
    //this.client = Object.assign(this.client , this.registerclientForm.value);
    this.userService.addfreelancerr(this.userData());
    this.registeruserForm.reset();
    this.usersubmited = false ;
    this.alertify.success('Congrats , you are successfully registred');
  
  }
  else {
    this.alertify.error('Provide the required fields');
  }
}
  userData () : Freelancerr {
    return this.user = {
      username  : this.username.value,
    
      useremail  : this.useremail .value,
      userpw  : this.userpw .value,
     
      userdescription  : this.useroccupation  .value,
      useroccupation   : this.useroccupation  .value,
    }

  }
  get username(){
    return this.registeruserForm.get('username') as FormControl ;
  }
 
  get useremail (){
    return this.registeruserForm.get('useremail') as FormControl ;
  }
  get userpw (){
    return this.registeruserForm.get('userpw') as FormControl ;
  }
  get userdescription  (){
    return this.registeruserForm.get('userdescription') as FormControl ;
  }
  get useroccupation  (){
    return this.registeruserForm.get('useroccupation') as FormControl ;
  }

}
