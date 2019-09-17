import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private _http: HttpClient) {}
  title = "app3";

  sendData(formObj) {
    formObj["id"] = null;

    this._http.post("http://localhost:3000/users", formObj).subscribe(res => {
      console.log(res);
    });
    console.log(formObj);
  }
}
