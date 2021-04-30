import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {
  id;
  user;

  constructor(myActivated:ActivatedRoute, private myService:UsersService) { 
    this.id = myActivated.snapshot.params.id;
  }

  ngOnInit(): void {
    this.myService.getUserById(this.id).subscribe(
      (res)=>{this.user = res ;},
      (err)=>{console.log(err);}
    );
  }

}
