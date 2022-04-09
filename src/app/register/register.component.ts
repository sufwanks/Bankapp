import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""


  constructor(private db:DatasService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var uname=this.uname;
    var acno=this.acno;
    var pswd=this.pswd;

    const result=this.db.register(uname,acno,pswd)

    if(result){
      alert("successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Account already exist...please Log In")
    }

  }

}
