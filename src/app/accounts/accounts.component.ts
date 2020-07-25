import { Component, OnInit } from '@angular/core';

//import { Router } from "@angular/router";
import { FortunaComService } from "../fortuna-com.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private fortunacom: FortunaComService) { }
  
  user;
  
  data:any;
  wallet;
  
  historyData:any;

  ngOnInit() {
	  this.user=localStorage.getItem("Username");
	  this.fortunacom.getName({username:this.user}).subscribe(datas=>{
		  
		console.log("data arrived___________________");
      this.data = datas;
	  console.log(this.data[0].name);
	 if(!this.data[0].wallet)
		this.wallet=0;
	else
		this.wallet=this.data[0].wallet;
	  

    });
	
	this.fortunacom.getData({username:this.user}).subscribe(datas=>{  
		console.log(datas);
		this.historyData=datas;
		});
  }
  
  addwallet()
  {
	  this.wallet=this.wallet+10;
	  this.fortunacom.addWallet({username:this.user, amount:this.wallet}).subscribe(datas=>{
		  
	  });
	  
  }
  

}
