// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobListService {

//   url='http://localhost:3000/joboffer';
//   constructor(
//     private http:HttpClient
//   ) { }

//   jobslist(){
   
//     return this.http.get(this.url);
//   }

// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobListService {

  url='http://localhost:3000/joboffer';
  constructor(
    private http:HttpClient
  ) { }

  jobslist(){
   
    return this.http.get(this.url);
  }

}