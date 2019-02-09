import { Component, OnInit } from '@angular/core';
import { AddbService } from '../providers/advertisedb/addb_service';
import { Advertises } from '../models/advertise_class';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  arrAdv: Advertises[] = [];

  constructor(public _dataAdv: AddbService) { }

  ngOnInit() {
    this._dataAdv.getAllAdvertisements().subscribe(
      (data: any) => {
        this.arrAdv = data;
        console.log(this.arrAdv);
      },
      function(e) {
        alert(e);
      },
      function() {

      }
    );
  }

}
