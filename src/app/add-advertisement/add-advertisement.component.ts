import { Component, OnInit } from '@angular/core';
import { Advertises } from '../models/advertise_class';
import { AddbService } from "../providers/advertisedb/addb_service";

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: ['./add-advertisement.component.scss']
})
export class AddAdvertisementComponent implements OnInit {

  ad_email:string;
  ad_title:string;
  ad_img:string;
  ad_des:string;
  ad_date:Date;

  constructor(public _data:AddbService) { }

  ngOnInit() {
  }
  onAdd(productForm) {  
    console.log(productForm.value.ad_title);
     this._data.addAdvertise(new Advertises(1,this.ad_title,this.ad_img,this.ad_des,this.ad_date)).subscribe(
      (data: any) => {
         console.log("Added");
        console.log(data);
     },
       function(e) {
         console.log("welcome error");
         alert(e);
      },
     function() {

      }
    );
  }

}
