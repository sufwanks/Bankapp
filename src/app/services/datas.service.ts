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

}
