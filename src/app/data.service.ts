import { Injectable } from '@angular/core';
import { Store } from './store';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stor } from './stor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //[x: string]: any;
  stores: Store[] = [];
  store: Store[] = [
    new Store("Burger Time", "Fast Food", "3km", "30 Minutes", 4.5,"assets/image/f1.jpg","assets/image/m1.jpg"),
    new Store("Al Rayan ", "Shawarma", "1km", "10 Minutes", 5,"assets/image/f2.jpg","assets/image/m2.jpg"),
    new Store("Fork and knife", "Fast Food", "3km", "30 Minutes", 3,"assets/image/f3.jpg","assets/image/m3.jpg"),
    new Store("Shawarman", "Shawarma", "2km", "20 Minutes", 4,"assets/image/f4.jpg","assets/image/m4.jpg"),
    new Store("Zuwar", "Arabin Food", "4km", "40 Minutes", 3.5,"assets/image/f5.jpg","assets/image/m5.jpg"),
    new Store("Alderah ", "Arabin Food", "5km", "50 Minutes", 4.5,"assets/image/f6.jpg","assets/image/m6.jpg"),
    
    
  ];

  URL: string = "http://localhost:3000/store";
 // URL1: string = "http://localhost:3000/storee";
  constructor(private http: HttpClient) {
  }
  
  addStudent(store: Store): Observable<Store>{
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    let body = {
      "store":store
    }
    
    //this.store.push(Store);
   return this.http.post(this.URL, body, httpOptions);
  }
  getStudents(): Observable<Stor[]>{
    return this.http.get<Stor[]>(this.URL);
  }

}
