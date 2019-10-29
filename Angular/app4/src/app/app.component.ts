import { Component } from "@angular/core";
import { CommonService } from "./common.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private commonService: CommonService) {
    console.log(" constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInit is called");
    this.commonService.getData().subscribe(res => {
      console.log(res);
    });
  }
  
  ngAfterContentInit() {
    console.log("ngAfterContentInit is called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked is called");
  }
  ngDoCheck() {
    console.log(" ngDoCheck is called");
  }
  ngAfterViewInit() {
    console.log(" ngAfterViewInit is called");
  }

  ngAfterViewChecked() {
    console.log(" ngAfterViewChecked is called");
  }
  ngDestroy() {
    console.log("ngDestroy is called");
  }
  title = "app4";
}
