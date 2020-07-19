import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class FortunaComService {

  constructor(private http:HttpClient) { }


   getTimer()
  {
    console.log("getting time " + this.http.get("http://localhost:1234/timer"));
    return this.http.get("http://localhost:1234/timer");
  } 

}
