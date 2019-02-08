import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { UsersDBService } from '../providers/user/users-db.service';
import { SignUP_RS, SignUP } from '../models/retailer_class';

import { AppRoutingModule } from '../app-routing.module';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  commonForm: FormGroup;

  flag = false;

  constructor(public formBuilder: FormBuilder, public _user: UsersDBService, private route: Router) {
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
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'password': new FormControl(null, Validators.required),
      'pincode': new FormControl(null, Validators.required),
      'city': new FormControl(null, Validators.required),
      'contacts': new FormControl(null, Validators.required),
      'person': new FormControl(null, Validators.required),
      'services': new FormControl(null),
      'fees': new FormControl(null)
    });

    //  this.serviceForm = new FormGroup({
    //   'services': new FormControl(null, Validators.required),
    //   'fees': new FormControl(null, Validators.required)
    // });
  }

  setFlag() {
    this.flag = true;
  }

  unsetFlag() {
    this.flag = false;
  }

  SubmitForm() {
    /* if (this.flag) {
      // tslint:disable-next-line:max-line-length
      this._user.signUpRetailerAndService(new SignUP_RS(null, this.email, this.password, this.name, this.city , this.contacts, this.pincode, this.service, this.fees, 1)).subscribe();
    } else {
      // tslint:disable-next-line:max-line-length
      this._user.signupRetailerOnly(new SignUP(null, this.email, this.password, this.name, this.city , this.contacts, this.pincode)).subscribe();
    } */
    this.route.navigate(['login']);
   }
}
