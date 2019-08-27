import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  sendInfo = new Subject();
  url =
    "http://www.filltext.com/?rows=3&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true";

  constructor(private _http: HttpClient) {}

  exchangeData(msg) {
    this.sendInfo.next(msg);
  }

  getDataFromServer() {
    return this._http.get(this.url);
  }
}
