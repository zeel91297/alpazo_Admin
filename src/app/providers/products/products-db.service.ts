import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from 'src/app/models/product_class';


@Injectable({
  providedIn: 'root'
})
export class ProductsDBService {

  public pastOrder = 'http://localhost:8110/pastretailor/';
  public pendingOrder = 'http://localhost:8110/pendingorder/';
  public addProductUrl =  'http://localhost:8110/zeelproduct/';
  public updateRequest = 'http://localhost:8110/updateretailerstatus/';
  public getProducts = '';
  public toAccept = 'http://localhost:8110/tobeaccepted/';

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
    console.log(pro);
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(pro);
    return this._http.post(this.addProductUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  public editInventory(pro) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(pro);
    return this._http.post(this.addProductUrl, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  public ordersToAccept(retailer_id) {
    return this._http.get(this.toAccept + retailer_id);
  }

  public updateRetailer(order_id, retailer_id) {
    // tslint:disable-next-line:max-line-length
    return this._http.put(this.updateRequest + order_id + '/' + retailer_id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
