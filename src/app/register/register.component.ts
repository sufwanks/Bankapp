import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    uname:[''],
    acno:[''],
    pswd:['']
  })

  constructor(private ds:DatasService,private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    // var uname=this.uname;
    // var acno=this.acno;
    // var pswd=this.pswd;


    var uname=this.registerForm.value.uname;
    var acno=this.registerForm.value.acno;
    var pswd=this.registerForm.value.pswd;


    const result=this.ds.register(uname,acno,pswd)

    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exist...please Log In")
    }

  }

}
