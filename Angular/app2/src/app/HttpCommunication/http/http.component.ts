import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "src/app/common.service";
import { HttpCommService } from "../http-comm.service";

@Component({
  selector: "app-http",
  templateUrl: "./http.component.html",
  styleUrls: ["./http.component.css"]
})
export class HttpComponent implements OnInit {
  users: Object;
  myuser = {
    firstName: "",
    lastName: ""
  };
  constructor(private httpComm: HttpCommService) {}

  ngOnInit() {
    this.getLestestUsers();
  }
  addUser(userForm) {
    userForm.id = null;
    this.httpComm.createUser(userForm.value).subscribe(response => {
      userForm.reset();
      this.getLestestUsers();
    });
  }

  getLestestUsers() {
    this.httpComm.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

  deleteUser(user) {
    this.httpComm.deleteUser(user).subscribe(respose => {
      this.getLestestUsers();
    });
  }

  editUser(user) {
    this.myuser = user;
  }

  updateUser() {
    console.log(this.myuser);
    this.httpComm.updateUser(this.myuser).subscribe(response => {
      this.getLestestUsers();
    });
  }
}
