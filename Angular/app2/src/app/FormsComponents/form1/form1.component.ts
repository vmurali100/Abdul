import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import { Comp1Component } from "src/app/comp1/comp1.component";
import { Parent1Component } from "src/app/parent1/parent1.component";

@Component({
  selector: "app-form1",
  templateUrl: "./form1.component.html",
  styleUrls: ["./form1.component.css"]
})
export class Form1Component implements OnInit {
  constructor() {}
  @ViewChild("myPara", null) myPara;
  // @ViewChild(Comp1Component, null) comp1Component: Comp1Component;
  @ViewChildren(Comp1Component, null) comp1Components: Comp1Component;

  @ViewChild(Parent1Component, null) parent1Component: Parent1Component;

  ngOnInit() {
    console.log(this.myPara);
  }
  submitData(form) {
    console.log(form.value);
  }
  ngAfterViewInit() {
    console.log(this.comp1Components.toArray());
  }
}
