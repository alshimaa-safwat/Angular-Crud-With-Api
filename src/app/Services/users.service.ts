import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) { }

  baseUrl = "http://localhost:3000/users"

  getAllUsers(){
    return this.myClient.get(this.baseUrl);
  }

  getUserById(id){
    return this.myClient.get(this.baseUrl+"/"+id);
  }

  addNewUser(user){
    return this.myClient.post(this.baseUrl, user);
  }

  editUser(id,user){
    return this.myClient.patch(this.baseUrl+"/"+id, user);
  }

  deleteById(id){
    return this.myClient.delete(this.baseUrl+"/"+id);
  }
}
