import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class SupplierService {



  private baseUrl = ' // http://localhost:8181/supplier/getAllSupplierDetails';



  constructor(private http: HttpClient) { }



  getSupplier(id: number | undefined): Observable<any> {

    return this.http.get(`${this.baseUrl}/${id}`);

  }



  createSupplier(supplier: Object): Observable<Object> {

    return this.http.post(`${this.baseUrl}`, supplier);

  }



  updateSupplier(id: number | undefined, value: any | undefined ): Observable<any> {

    return this.http.put(`${this.baseUrl}/${id}`, value);

  }



  deleteSupplier(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });

  }



  getSuppliersList(): Observable<any> {

    return this.http.get(`${this.baseUrl}`);

  }

}
