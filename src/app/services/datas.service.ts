import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  dataBase:any={
    1000:{acno:1000,uname:"kabil",password:1000,balance:5000},
    1001:{acno:1001,uname:"neer",password:1001,balance:6000},
    1002:{acno:1002,uname:"neelam",password:1002,balance:8000},
    1003:{acno:1003,uname:"Moin",password:1003,balance:4000}
  }

  constructor() { }

  register(uname:any,acno:any,password:any){

    let dataBase=this.dataBase;

    if(acno in dataBase){
      return false;
    }
    else{
      dataBase[acno]={
      acno,
      uname,
      password,
      balance: 0
      }
      console.log(dataBase);
      
      return true;

    }
  }

  login(acno:any,pswd:any){

    

    let dataBase=this.dataBase;
     
    if(acno in dataBase){
      if(pswd== dataBase[acno]["password"]){
        alert("access granted")
        // already exist in dataBase
        return true;
        
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid account number")
      return false;
    }

  }

  deposit(dAcno:any,dPswd:any,dAmount:any){
    let dataBase=this.dataBase;

    if(dAcno in dataBase){
      if(dPswd == dataBase[dAcno]["password"]){
        dataBase[dAcno]["balance"]+=dAmount
        return dataBase[dAcno]["balance"]
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("user doesnt exist")
      return false
    }
  }

  withdraw(wAcno:any,wPswd:any,wAmount:any){
    let dataBase=this.dataBase;

    if(wAcno in dataBase){
      if(wPswd == dataBase[wAcno]["password"]){
        if(dataBase[wAcno]["balance"]>wAmount){
          dataBase[wAcno]["balance"]-=wAmount
          return dataBase[wAcno]["balance"]
        }
        else{
          alert("insufficient balance")
        }
      
      }
      else{
        alert("invalid password")
      }
    }
    else{
      alert("user doesnt exist")
      return false
    }
  }

}
