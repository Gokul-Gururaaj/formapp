import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray} from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { forbiddenNameValidator } from '../shared/name.validator';

@Component({
 selector: 'app-reactive-form',
 templateUrl: './reactive-form.component.html',
 styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit{
 
 validated=false
 registrationForm:FormGroup | any
 validateForm:boolean=false
 
 /*just to replace this.registrationForm.controls with f*/

 get f()
 {
  return this.registrationForm.controls
 }
 get Emails()
 {
     return this.registrationForm.get('emails') as FormArray; 
 }
 addemails()
 {
     this.Emails.push(new FormControl(''))
 }
 get Age()
 {
    return this.registrationForm.get('age') 
 }
 
 constructor() { }

 ngOnInit(): void 
 {
  this.registrationForm = new FormGroup({
 name:new FormControl('',
 [Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/)]),
 age:new FormControl(''),
 addreqdvalidation:new FormControl(false),
 addminlenvalidation:new FormControl(false),
 email:new FormControl('',[Validators.required]),
 emails:new FormArray([],[Validators.required]),
 password:new FormControl('',[Validators.required]),
 confirmpassword:new FormControl('',[Validators.required])
 
  }, { validators: PasswordValidator });
  this.registrationForm.get('addreqdvalidation').valueChanges.subscribe((checkedValue:boolean)=>{
      if(checkedValue)
      {
          this.Age.setValidators(Validators.required);
      }
    //   else
    //   {
    //       this.Age.clearValidators();
    //   }
      this.Age.updateValueAndValidity();
    })
    this.registrationForm.get('addminlenvalidation').valueChanges.subscribe((checkedValue:boolean)=>{
        if(checkedValue)
        {
            this.Age.setValidators(Validators.minLength(3));
        }
        // else
        // {
        //     this.Age.clearValidators();
        // }
        this.Age.updateValueAndValidity();
      })  
  
 }

sub()
 {
//  if(this.registrationForm.valid)
 {
 this.validateForm=false
 this.validated=true;
 console.log(this.registrationForm.value);
 }
//  else
//  {
//  this.validateForm=true;
//  }
 }



}
