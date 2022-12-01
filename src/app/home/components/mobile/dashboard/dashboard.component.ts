import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadMobileStore } from "src/app/home/store/actions/mobile.action";
import { getMobileStoreState } from "src/app/home/store/selectors/mobile.selector";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  @Input() mobileFeed: any;
  // mobileDetailList: any;
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(this.mobileFeed);
    // this.store.dispatch(loadMobileStore());
    // this.store.select(getMobileStoreState).subscribe((e) => {
    //   this.mobileDetailList = e;
    // });
  }
}
