import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

import { FortunaComService } from "../fortuna-com.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  user = {name:'', email:'', mobile:0, role:'', username: '', password: ''};
  alert: Boolean = false;

  constructor(private fcom: FortunaComService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
      name: [null, Validators.compose([Validators.required, Validators.pattern(/^[\.a-zA-Z ]+$/)])],
      email: [null, Validators.compose([Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)])],
      mobile: [null, Validators.compose([Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)])],
      role: [null, Validators.compose([Validators.required, Validators.pattern(/^Admin$|^User$/)])],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    })
  }

  register(){
    console.log(this.user);
    if (this.registerForm.valid){
      this.fcom.checkUsernameEmail(this.user).subscribe(data=>{
        if(data['found']==true) this.alert = true;
        else {
          this.alert = false;
          this.fcom.addUser(this.user).subscribe();
          this.router.navigateByUrl("");
        }
      })
    }
  }


}
