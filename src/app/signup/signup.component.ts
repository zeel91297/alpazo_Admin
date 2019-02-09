import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
import { UsersDBService } from '../providers/user/users-db.service';
import { SignUP_RS, SignUP } from '../models/retailer_class';

import { AppRoutingModule } from '../app-routing.module';
import { Route, Router } from '@angular/router';
import { Service } from '../models/service_class';
import { ServicesDBService } from '../providers/servicesDB/services-db.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  commonForm: FormGroup;

  flag = false;

  arrService: Service[] = [];

  constructor(
    public formBuilder: FormBuilder,
    public _user: UsersDBService,
    private route: Router,
    private _dataService: ServicesDBService
  ) {
    /* this.commonForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required),
      'pincode': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'contacts': new FormControl(null, Validators.required),
      'person': new FormControl(null, Validators.required)
    }); */
  }

  public name: string;
  public email: string;
  public password: string;
  public pincode: number;
  public city: string;
  public contacts: number;
  public person: string;
  public service: number;
  public fees: number;

  ngOnInit() {
    this.commonForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, Validators.required),
      pincode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      contacts: new FormControl(null, Validators.required),
      person: new FormControl(null, Validators.required),
      services: new FormControl(null),
      fees: new FormControl(null)
    });
    this._dataService.getAllServices().subscribe(
      (data: any) => {
        console.log(data);
        this.arrService = data.Data;
        console.log(this.arrService);
      },
      err => {
        console.log(err);
      },
      () => {}
    );

  }

  setFlag() {
    this.flag = true;
  }

  unsetFlag() {
    this.flag = false;
  }

  SubmitForm() {
    if (this.flag) {
      // tslint:disable-next-line:max-line-length
      this._user.signUpRetailerAndService(new SignUP_RS(null, this.email, this.password, this.name, this.city , this.contacts, this.pincode, this.service, this.fees, 1)).subscribe(
        (data: any) => {
          console.log(data);
          this.route.navigate(['login']);
        },
        function(e) {
          alert(e);
        },
        function() {

        }
      );
    } else {
      // tslint:disable-next-line:max-line-length
      this._user.signupRetailerOnly(new SignUP(null, this.email, this.password, this.name, this.city , this.contacts, this.pincode)).subscribe(
        (data: any) => {
          console.log(data);
          this.route.navigate(['login']);
        },
        function(e) {
          alert(e);
        },
        function() {

        }
      );
    }
    // this.route.navigate(['login']);
  }
}
