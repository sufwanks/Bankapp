import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  user:any
  transaction:any
  acno:any
  blnce:any

  constructor(private ds:DatasService, private router:Router) { 
    this.blnce=this.ds.currentBalance;
    this.user=this.ds.currentUser;
    this.acno=this.ds.currentAcno;
    this.transaction=this.ds.transfer(this.acno)
    // console.log(this.ds.transfer(this.acno));
    // console.log(this.ds.dataBase[this.acno]["balance"]);
    
  }

  ngOnInit(): void {
    if(!localStorage.getItem("currentAcno")){
      alert("please log in")
      this.router.navigateByUrl("")
    }
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

}
