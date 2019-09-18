import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  person = {
    fname:"Murali",
    lname:"Krishna",
    email:"vmurali100@gmail.com",
    address:{
      house:"Purvi Pride Apartments",
      area:"Whitefield",
      locality:"Immadahalli"
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
