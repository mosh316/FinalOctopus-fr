import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Fruit from '../models/Fruit.model';
@Injectable({
  providedIn: 'root'
})
export class FrhttpserviceService {
  private URL = "http://localhost:3000/api/routes/fruits-route/";
  constructor(private http:HttpClient) { }
  getFruits(){
    return  this.http.get(this.URL); 
  }
}
