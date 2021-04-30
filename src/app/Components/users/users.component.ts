import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  users;

  constructor(private myService:UsersService, private router: Router) { }

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe(
      (res)=>{this.users = res;},
      (err)=>{console.log(err);}
    );
  }

  delete(id){
    let result = confirm("Are you sure?");

    if(result){
      this.myService.deleteById(id).subscribe(
        (res)=>{console.log(res);},
        (err)=>{console.log(err);}
      );
      this.users = this.users.filter(item => item.id != id);
    }

  }

}
