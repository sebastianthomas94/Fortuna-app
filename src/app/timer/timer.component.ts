import { Component, OnInit } from '@angular/core';
import { FortunaComService} from '../fortuna-com.service';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor(private fcom:FortunaComService) {  }


  time:any;
  

  ngOnInit() {
    
 
	let timer=setInterval(()=>this.check(),999);
 
  }
  
   
  check()
 {
  console.log('inside check');
  this.fcom.getTimer().subscribe(data=>{
      console.log(data);
      this.time = data;
    });
 }  

 
}
