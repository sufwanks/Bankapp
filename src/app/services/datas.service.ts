import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  currentUser:any
  currentAcno:any
  currentBalance:any


  dataBase:any={
    1000:{acno:1000,uname:"kabil",password:1000,balance:5000, transactions:[]},
    1001:{acno:1001,uname:"neer",password:1001,balance:6000,transactions:[]},
    1002:{acno:1002,uname:"neelam",password:1002,balance:8000,transactions:[]},
    1003:{acno:1003,uname:"Moin",password:1003,balance:4000,transactions:[]}
  }

  constructor() {
    this.getDetails()
   }

    saveDetails(){
      
      localStorage.setItem("dataBase",JSON.stringify(this.dataBase))

      if(this.currentAcno){
        localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
      }
      if(this.currentUser){
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
      }

    }

    getDetails(){
      
      if(localStorage.getItem("dataBase")){
        this.dataBase=JSON.parse(localStorage.getItem("dataBase")||"")
      }
      if(localStorage.getItem("currentAcno")){
        this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||"")
      }
      if(localStorage.getItem("currentUser")){
        this.currentUser=JSON.parse(localStorage.getItem("currentUser")||"")
      }

    }

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
      balance: 0,
      transactions:[]
      }
      // console.log(dataBase);
      this.saveDetails()
      return true;

    }
  }

  login(acno:any,pswd:any){

    

    let dataBase=this.dataBase;
     
    if(acno in dataBase){
      if(pswd== dataBase[acno]["password"]){
        alert("access granted")

        this.currentUser=dataBase[acno]["uname"]
        this.currentAcno=acno
        this.saveDetails()

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

        dataBase[dAcno]["transactions"].push({
          typeof:"Credit",
          amount:dAmount
        })
        // console.log(this.dataBase[dAcno].transactions);
        this.saveDetails()

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

          dataBase[wAcno]["transactions"].push({
            typeof:"Debit",
            amount:wAmount
          })
          // console.log(dataBase);
          this.saveDetails()

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
  
  transfer(acno:any){
    // console.log(this.dataBase[dAcno].transactions);
    
    this.currentBalance=this.dataBase[acno]["balance"]

    return this.dataBase[acno].transactions
  }

}
