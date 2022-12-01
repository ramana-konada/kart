import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { setPriceFilter } from "../../store/admin.action";

@Component({
  selector: "app-mobile-config",
  templateUrl: "./mobile-config.component.html",
  styleUrls: ["./mobile-config.component.scss"],
})
export class MobileConfigComponent implements OnInit {
  price = new FormControl([]);
  priceList: number[] = [10000, 15000, 20000, 30000];
  constructor(private store: Store) {}

  ngOnInit(): void {}
  // this.store.dispatch(setPriceFilter());
  onSave() {
    const priceValue: Array<number> = this.price.value ? this.price.value : [];
    this.store.dispatch(setPriceFilter({ priceFilterList: priceValue }));
  }
}
