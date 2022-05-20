import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client';
import { ClientServiceService } from '../client-service.service';

import { ConfirmedValidator } from './confirmed.validator';

import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-clientuser-register',
  templateUrl: './clientuser-register.component.html',
  styleUrls: ['./clientuser-register.component.css']
})
export class ClientuserRegisterComponent implements OnInit {

  client ! : Client ;
  clientsubmited !: boolean ;

  registerclientForm!: FormGroup;
  constructor(private fb: FormBuilder, private clientService : ClientServiceService, 
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
    this.registerclientForm = this.fb.group({
      clientfname: [null ,[Validators.required,Validators.minLength(3)]],
      clientlname: [null , [Validators.required,Validators.minLength(3)]],
      clientemail: [null , [Validators.required,Validators.email]],
      clientpw : [null , [Validators.required,Validators.minLength(8)]],
      clientcpw : [null , [Validators.required,Validators.minLength(8)]],
      clientmobile : [null , [Validators.required,Validators.minLength(8)]]

  }, { 
    validator: ConfirmedValidator('clientpw', 'clientcpw')});
}
      

 /*  vali(fg: FormGroup) : Validators{
    return fg.get('clientpw').value === fg.get('clientcpw').value  ? null :
    {notmtached : true} ;

  } */

  onSubmit(){
    
    console.log(this.registerclientForm.value);
    this.clientsubmited = true ;
    if (this.registerclientForm.valid)
    {
    //this.client = Object.assign(this.client , this.registerclientForm.value);
    this.clientService.addclient(this.clientData());
    this.registerclientForm.reset();
    this.clientsubmited = false ;
    this.alertify.success('Congrats , you are successfully registred');
  
  }
  else {
    this.alertify.error('Provide the required fields');
  }
}
  clientData () : Client {
    return this.client = {
      clientfname : this.clientfname.value,
      clientlname : this.clientlname.value,
      clientemail : this.clientemail.value,
      clientpw : this.clientpw.value,
     
      clientmobile : this.clientmobile.value
    }

  }
  get clientfname(){
    return this.registerclientForm.get('clientfname') as FormControl ;
  }
  get clientlname(){
    return this.registerclientForm.get('clientlname') as FormControl ;
  }
  get clientemail(){
    return this.registerclientForm.get('clientemail') as FormControl ;
  }
  get clientpw(){
    return this.registerclientForm.get('clientpw') as FormControl ;
  }
  get clientmobile(){
    return this.registerclientForm.get('clientmobile') as FormControl ;
  }


}
