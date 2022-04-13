import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner";
  accnum="Enter your account number";
  acno="";
  pswd="";

  loginForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private router:Router, private ds:DatasService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  accountChange(event:any){
    this.acno=event.target.value;    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;    
  }
// event binding  || two way binding(NgModel)
  login(){

    var acno= this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd

    const result = this.ds.login(acno,pswd)
    if (result){
      this.router.navigateByUrl("dashboard")
    }
     
    // if(acno in dataBase){
    //   if(pswd== dataBase[acno]["password"]){
    //     alert("access granted")
    //     this.router.navigateByUrl("dashboard")
    //   }
    //   else{
    //     alert("invalid password")
    //   }
    // }
    // else{
    //   alert("invalid account number")
    // }

  }


// template referance variable
// login(a:any,p:any){

//   var acno= a.value;
//   var pswd=p.value;

//   let dataBase=this.dataBase;
   
//   if(acno in dataBase){
//     if(pswd== dataBase[acno]["password"]){
//       alert("access granted")
//     }
//     else{
//       alert("invalid password")
//     }
//   }
//   else{
//     alert("invalid account number")
//   }

// }

}
