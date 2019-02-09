import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from 'src/app/models/product_class';


@Injectable({
  providedIn: 'root'
})
export class ProductsDBService {

  public pastOrder = 'http://localhost:8110/pastretailor/';
  public pendingOrder: '';
  public addProductUrl: '';
  public updateInventory: '';
  public getProducts: '';

  constructor(private _http: HttpClient) { }

  getPastOrders(retailer_id) {
    return this._http.get(this.pastOrder + retailer_id);
  }

  getPendingOrders(retailer_id) {
    return this._http.get(this.pendingOrder + retailer_id);
  }

  public getProdudts(retailer_id) {
    return this._http.get(this.getProducts + retailer_id);
  }

  public addProduct(pro: Products) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(pro);
    return this._http.post(this.addProductUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  public editInventory(pro) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(pro);
    return this._http.post(this.addProductUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
