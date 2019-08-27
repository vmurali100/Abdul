import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-http",
  templateUrl: "./http.component.html",
  styleUrls: ["./http.component.css"]
})
export class HttpComponent implements OnInit {
  data: Object;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getDataFromServer().subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }
}
