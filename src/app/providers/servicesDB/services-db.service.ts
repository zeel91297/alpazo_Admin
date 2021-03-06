import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesDBService {

  public services_url = 'http://localhost:8110/services';

  constructor(private _http: HttpClient) { }

  getAllServices() {
    return this._http.get(this.services_url);
  }
}
