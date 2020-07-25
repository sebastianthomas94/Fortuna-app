import { Component, OnInit } from '@angular/core';

import { FortunaComService} from '../fortuna-com.service';

@Component({
  selector: 'app-pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.css']
})
export class PannelComponent implements OnInit {

  constructor(private fcom:FortunaComService) { }

  red;
  blue;
  green;
  selected: boolean[] = [this.red,this.blue,this.green];
  
  
  
  
  data = {user:'', time:0, result:false};
  result:boolean=false;
  
  

  testshape:any[]=["","",""];

  time:any;       //------------for service data
  ngOnInit() {
    let timer=setInterval(()=>this.check(),999);  	//periodic checking
	  this.data.user=localStorage.getItem("Username");
  }
  onClickMe(n){
	  if(!this.time.cooldown){
		  
			if(!(this.selected[0] || this.selected[1] || this.selected[2]))
			{
				this.selected[n] = true;

				this.testshape[n]="pulse btn-floating";
			}
	}
  }

  check(){                                                 //periodic checking
  this.fcom.getTimer().subscribe(data=>{
    console.log(data);
    this.time = data;
  });
  if (this.time.cooldownTime==0)
    {
      this.selected=[false,false,false];
	  this.testshape=["","",""];
    }
	
	if(this.time.cooldown && !this.result)
	{
		this.result=true;
		if(this.selected[0] && this.time.dice==1 || this.selected[1] && this.time.dice==2 || this.selected[2] && this.time.dice==3)
		{
			this.data.result=true;							//stroring winn or lose data
		}
		else
			this.data.result=false;
		
		if(this.selected[0] || this.selected[1] || this.selected[2])
			this.fcom.sendData(this.data).subscribe();
		
	}
	
	 if (!this.time.cooldown)
		this.result=false; 
	

	/* if (this.time.cooldownTime==0)
		this.testshape=["","",""]; */
  }



}
