import { Component, OnInit } from '@angular/core';

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


  dataBase:any={
    1000:{acno:1000,uname:"kabil",password:1000,balance:5000},
    1001:{acno:1001,uname:"neer",password:1001,balance:6000},
    1002:{acno:1002,uname:"neelam",password:1002,balance:8000},
    1003:{acno:1003,uname:"Moin",password:1003,balance:4000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  accountChange(event:any){
    this.acno=event.target.value;    
  }
  pswdChange(event:any){
    this.pswd=event.target.value;    
  }
// event binding
  // login(){

  //   var acno= this.acno;
  //   var pswd=this.pswd;

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
// template referance variable
login(a:any,p:any){

  var acno= a.value;
  var pswd=p.value;

  let dataBase=this.dataBase;
   
  if(acno in dataBase){
    if(pswd== dataBase[acno]["password"]){
      alert("access granted")
    }
    else{
      alert("invalid password")
    }
  }
  else{
    alert("invalid account number")
  }

}

}
