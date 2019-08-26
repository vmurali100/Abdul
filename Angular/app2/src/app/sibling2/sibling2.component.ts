import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  messageFromSib1
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.commonService.sendInfo.subscribe(res=>{
      console.log(res)
      this.messageFromSib1 = res;
    })
  }

}
