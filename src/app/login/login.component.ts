import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from "@angular/router";
import { FortunaComService } from "../fortuna-com.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credintials = {username:'', password:''};
  loginForm : FormGroup;
  alert: Boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private frtunacom: FortunaComService) { }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
      username : [null, Validators.required],
      password : [null, Validators.required]
    })
  
  }




  login(){
    console.log(this.credintials);
    this.frtunacom.getUser(this.credintials).subscribe(data=>{
      if (data['found'] == true){
        localStorage.setItem("Username",this.credintials['username']);
        
        this.router.navigateByUrl("/say/"+localStorage.getItem("Username")+"/home");
      } 
      else {
        this.alert = true;
        this.router.navigateByUrl("");
      } 
    })
    
  }
  
  gotosignup()
  {
	  this.router.navigateByUrl("/signup");
  }

}
