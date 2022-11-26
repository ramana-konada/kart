import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IMobileStoreModal } from "../../modals/mobile-store.modal";
import { KmobileService } from "../../services/kmobile/kmobile.service";
import { loadMobileStore } from "../../store/actions/mobile.action";
import { getMobileStoreState } from "../../store/selectors/mobile.selector";

@Component({
  selector: "app-mobiles-store",
  templateUrl: "./mobiles-store.component.html",
  styleUrls: ["./mobiles-store.component.scss"],
})
export class MobilesStoreComponent implements OnInit {
  itemList?: IMobileStoreModal[];
  constructor(private kmobileService: KmobileService, private store: Store) {}

  ngOnInit(): void {
    // this.kmobileService.getMobiles().subscribe((s) => {
    //   this.itemList = s;
    // });

    this.store.dispatch(loadMobileStore());
    this.store.select(getMobileStoreState).subscribe((s) => {
      console.log(s);
      this.itemList = s;
    });
  }
}
