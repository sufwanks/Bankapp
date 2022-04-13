import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  // uname="";
  // acno="";
  // pswd="";
  
  
  // registerFoem model
  registerForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private ds:DatasService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // var uname=this.uname;
    // var acno=this.acno;
    // var pswd=this.pswd;

    console.log(this.registerForm.value);
    

    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;

    
    if(this.registerForm.valid){

      const result=this.ds.register(uname,acno,pswd)

      if(result){
        alert("successfully registered")
        this.router.navigateByUrl("")
      }
      else{
        alert("Account already exist...please Log In")
      }
    }
    else{
      alert("invalid form")
    }
    

  }

}
