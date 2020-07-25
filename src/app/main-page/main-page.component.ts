import { Component, OnInit } from '@angular/core';
import { FortunaComService } from "../fortuna-com.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router, private service: FortunaComService) { }

  username;
	data:any;

  ngOnInit() {

    if(!localStorage.getItem("Username"))
      this.router.navigateByUrl("login");
  
	this.service.checkUsernameEmail(localStorage.getItem("Username")).subscribe(data=>{
      console.log(data);
      this.data = data;
	});
	  
	  if(!this.data['found'])
		  this.router.navigateByUrl("signup");
  
  



}}