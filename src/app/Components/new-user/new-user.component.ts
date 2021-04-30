import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: [],
})
export class NewUserComponent implements OnInit {
  errors = [];

  constructor(private myService:UsersService, private router: Router) {}

  ngOnInit(): void {}

  ourValidation = new FormGroup({
    id: new FormControl(null, Validators.required),
    name: new FormControl('', Validators.required),
    age: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
  });

  get Id() {
    return this.ourValidation.controls.id.valid;
  }

  get Name() {
    return this.ourValidation.controls.name.valid;
  }

  get Age() {
    return this.ourValidation.controls.age.valid;
  }

  get Phone() {
    return this.ourValidation.controls.phone.valid;
  }

  get Email() {
    return this.ourValidation.controls.email.valid;
  }

  get City() {
    return this.ourValidation.controls.city.valid;
  }

  get Street() {
    return this.ourValidation.controls.street.valid;
  }

  Add() {
    this.errors = [];
    if (!this.Id) this.errors.push('Id required');
    if (!this.Name) this.errors.push('Name required');
    if (!this.Age) this.errors.push('Age required');
    if (!this.Phone) this.errors.push('Phone required');
    if (!this.Email) this.errors.push('Email Not Valid');
    if (!this.City) this.errors.push('City required');
    if (!this.Street) this.errors.push('Street required');
    else if (this.Id && this.Name && this.Age && this.Phone && this.Email && this.City && this.Street) {
      let user = {
        id: this.ourValidation.controls.id.value,
        name: this.ourValidation.controls.name.value,
        age: this.ourValidation.controls.age.value,
        phone: this.ourValidation.controls.phone.value,
        email: this.ourValidation.controls.email.value,
        address:{
          city: this.ourValidation.controls.city.value,
          street: this.ourValidation.controls.street.value,
        }
      };

      this.myService.addNewUser(user).subscribe(
        (res)=>{console.log(res)},
        (err)=>{console.log(err)}
      );

      this.router.navigate(['']);
    }
  }
}
