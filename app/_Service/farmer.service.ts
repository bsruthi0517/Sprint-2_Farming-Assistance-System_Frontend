import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Farmer } from '../_Model/farmer.model';



@Injectable({

  providedIn: 'root'

})

export class FarmerService {

  updateFarmer(id: number, value: any | undefined):Observable<any> {

    return this.http.put(`${this._baseUrl}/${id}`, value);

  }

  getFarmer(id: number|undefined): Observable<any> {

    return this.http.get(`${this._baseUrl}/${id}`);

  }

  createFarmer(farmer: Object): Observable<Object> {

    return this.http.post(`${this._baseUrl1}`, farmer);

  }

  deleteFarmer(id: number): Observable<any> {

    return this.http.delete(`${this._baseUrl}/${id}`, { responseType: 'text' });

  }

 private  _baseUrl:string="http://localhost:8000/api/farmer/fetchAllValues";

 private  _baseUrl1:string="http://localhost:8000/api/farmer/addfarmer";



  constructor(private http:HttpClient) { }



  getAllFarmersList():Observable<Farmer[]>{

    return this.http.get<Farmer[]>(`${this._baseUrl}`);

  }



 

}




