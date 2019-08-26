import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  message = "I am Message from Sibbling1"
  constructor(private commonService:CommonService) { }

  ngOnInit() {

  }
  sendMessageToSib2(){
    this.commonService.exchangeData(this.message)
  }
}
