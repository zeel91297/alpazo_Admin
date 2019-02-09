import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Advertises } from 'src/app/models/advertise_class';

@Injectable({
  providedIn: 'root'
})
export class AddbService {
  public url = 'http://localhost:8110/adservice/';

  constructor(public http: HttpClient) { }

  addAdvertise(add: Advertises) {
    const body = JSON.stringify(add);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

  getAllAdvertisements() {
    return this.http.get(this.url);
  }
}
