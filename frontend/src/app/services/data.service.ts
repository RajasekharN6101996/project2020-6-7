import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }
    getAll(){
      return this.http.get(this.url);
  }
  getaddress(){
    // var count= this.http.get(this.url);

    return this.http.get(this.url);

}
}
