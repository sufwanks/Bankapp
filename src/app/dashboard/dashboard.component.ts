import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any

  // dAcno="";
  // dPswd="";
  // dAmount="";

  // wAcno="";
  // wPswd="";
  // wAmount="";

  depositForm = this.fb.group({
    dAcno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    dPswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
    dAmount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  withdrawForm = this.fb.group({
    wAcno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    wPswd:['',[Validators.required,Validators.pattern('[0-9]*')]],
    wAmount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private ds:DatasService, private fb:FormBuilder, private router:Router) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please log in")
      this.router.navigateByUrl("")
    }
  }

  deposit(){

    var dAcno=this.depositForm.value.dAcno;
    var dPswd=this.depositForm.value.dPswd;
    var dAmount=this.depositForm.value.dAmount
    var depAmount=parseInt(dAmount)

    const result=this.ds.deposit(dAcno,dPswd,depAmount)

    if(result){
      alert(`${depAmount} deposited. Available balance is ${result}`)
      return true
    }
    else{
      alert("not deposited")
      return false
    }
  }

  withdraw(){
    var wAcno=this.withdrawForm.value.wAcno;
    var wPswd=this.withdrawForm.value.wPswd;
    var wAmount=this.withdrawForm.value.wAmount
    var widrwAmount=parseInt(wAmount)

    const result=this.ds.withdraw(wAcno,wPswd,widrwAmount)

    if(result){
      alert(`${widrwAmount} debited. Available balance is ${result}`)
      return true
    }
    else{
      alert("transaction failed")
      return false
    }
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }
}
