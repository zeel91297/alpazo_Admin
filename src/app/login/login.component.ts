import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { UsersDBService } from '../providers/user/users-db.service';
import { Router } from '@angular/router';
import { LoginR } from '../models/retailer_class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string;
  password: string;
  constructor(private _data: UsersDBService, private route: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    // this._data.loginRetailer(new LoginR(this.email, this.password)).subscribe();
    this.route.navigate(['dashboard']);
  }

}
