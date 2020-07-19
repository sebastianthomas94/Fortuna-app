import { Component, OnInit } from '@angular/core';
import { FortunaComService} from '../fortuna-com.service'


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {

  constructor(private fcom:FortunaComService) { }
  
  time:any;

  ngOnInit() {
	  
    let timer=setInterval(()=>this.check(),999);
    
  }
  color:any;


  check()
 {
  console.log('inside check');
  this.fcom.getTimer().subscribe(data=>{
      console.log(data);
      this.time = data;
    });
    if(this.time.dice==1)
      this.color="Red";
    else if(this.time.dice==2)
      this.color="Blue";
    else if(this.time.dice==3)
      this.color="Green";
 }  
}
