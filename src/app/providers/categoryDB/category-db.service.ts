import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryDBService {

  cat_url = 'http://localhost:8110/category';
  constructor(private _http: HttpClient) { }

  getAllCategories() {
    return this._http.get(this.cat_url);
  }
}
