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

  testshape:any[]=["","",""];

  time:any;       //------------for service data
  ngOnInit() {
    let timer=setInterval(()=>this.check(),999);          //periodic checking
	  
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
	
	/* if (this.time.cooldownTime==0)
		this.testshape=["","",""]; */
  }

}
