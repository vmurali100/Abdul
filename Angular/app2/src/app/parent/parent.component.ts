import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  message = "I am from Parent"
  msgFromChild: any;
  constructor() { }

  ngOnInit() {
  }
  receiveDataFromChild(obj){
    console.log(obj)
    this.msgFromChild=obj
  }
}
