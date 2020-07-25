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

  getUser(user){
    console.log("Signing in......");
   return this.http.post("http://localhost:1234/login", user);
 
 }
 
 getName(user)
 {
	     console.log("Geting Name of account holder");
   return this.http.post("http://localhost:1234/login/data", user);
 }
 
 checkUsernameEmail(user){
  return this.http.get("http://localhost:1234/signup/"+user['username'])
}

addUser(user){
  return this.http.post("http://localhost:1234/signup", user)
}

addWallet(data)
{
	return this.http.post("http://localhost:1234/login/data/wallet", data);
}

sendData(data)
{
	return this.http.post("http://localhost:1234/data", data);
}

getData(user)
{
	return this.http.post("http://localhost:1234/data/get", user);
}

}
