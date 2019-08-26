import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() getData ;
  @Output() sendDataFromChild = new EventEmitter;
  msg="I am A message from Child . I want to go to Parent"
  constructor() { }

  ngOnInit() {
  }
  sendDataToParent(){
    this.sendDataFromChild.emit(this.msg)
  }
}
