import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,FormArray} from '@angular/forms';
import { forbiddenNameValidator } from '../shared/name.validator';
import { EmailValidator } from '../shared/email.validator';
@Component({
  selector: 'blog-creator',
  templateUrl: './blog-creator.component.html',
  styleUrls: ['./blog-creator.component.css']
})
export class BlogCreatorComponent implements OnInit {
  blogcreationForm:FormGroup | any
  get f()
  {
    //return this.registrationForm.get('name');
    return this.blogcreationForm.controls
  }
  get Email()
  {
     return this.blogcreationForm.get('email') 
  }
  constructor() { }

  ngOnInit(): void {
    this.blogcreationForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(4),
        forbiddenNameValidator(/admin/),Validators.pattern('[a-zA-Z]*')]),
      
      
      email:new FormControl('',[Validators.required,EmailValidator]),
      pdate: new FormControl('',[Validators.required]),
     
      btitle:new FormControl('',[Validators.required]),
      bcontent:new FormControl('',[Validators.required])
      
      
    });
  }
  sub()
  {
    
      
      console.log(this.blogcreationForm.value);
      console.log("Name of the author:\n",this.blogcreationForm.value.name);
      console.log("Email id of the author:\n",this.blogcreationForm.value.email);
      console.log("Publishing date:\n",this.blogcreationForm.value.pdate);
      console.log("Title of the blog:\n",this.blogcreationForm.value.btitle);
      console.log("Content of the blog:\n",this.blogcreationForm.value.bcontent);
    
  }
  checker()
  {
   const emailname=this.Email.value;
   const receiptantname   = emailname.substring(0, emailname.lastIndexOf("@"));
   
   const domainname = emailname.substring(emailname.indexOf("@") +1);
   const cdomainname = domainname.substring(0,domainname.indexOf("."));
   const extensionname=domainname.substring(domainname.indexOf(".") +1);
  //  console.log("Email Name:",emailname);
  //  console.log("Receiptant Name:",receiptantname);
  //  console.log("Domain name:",cdomainname);
  //  console.log("Extension:",extensionname);
   
  }
  foremail(event:any)
  {
    console.log(event.charCode);
    if(event.charCode==32)
    {
      return false;
    }
    else
    {
      return true;
    }
  }

}
