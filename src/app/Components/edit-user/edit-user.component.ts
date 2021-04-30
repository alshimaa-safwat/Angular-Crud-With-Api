import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styles: [
  ]
})
export class EditUserComponent implements OnInit {
  errors = [];
  user;
  id;
  name;
  age;
  phone;
  email;
  city;
  street;

  constructor(myActivated:ActivatedRoute, private myService:UsersService, private router: Router) {
    this.id = myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{this.user = res ;},
      (err)=>{console.log(err);}
    );
    setTimeout(() => {
      // console.log(this.user);
      this.name = this.user.name;
      this.age = this.user.age;
      this.phone = this.user.phone;
      this.email = this.user.email;
      this.city = this.user.address.city;
      this.street = this.user.address.street;
    }, 500); 
  }

  Edit() {
    this.errors = [];
    if (!this.id) this.errors.push('Id required');
    if (!this.name) this.errors.push('Name required');
    if (!this.age) this.errors.push('Age required');
    if (!this.phone) this.errors.push('Phone required');
    if (!this.email) this.errors.push('Email Not Valid');
    if (!this.city) this.errors.push('City required');
    if (!this.street) this.errors.push('Street required');
    else if (this.id && this.name && this.age && this.phone && this.email && this.city && this.street) {
      let user = {
        id: this.id,
        name: this.name,
        age: this.age,
        phone: this.phone,
        email: this.email,
        address:{
          city: this.city,
          street: this.street,
        }
      };

      this.myService.editUser(this.id, user).subscribe(
        (res)=>{console.log(res)},
        (err)=>{console.log(err)}
      );

      this.router.navigate(['']);
    }
  }
}

