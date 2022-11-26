import { Component, OnInit } from "@angular/core";
import { cloneDeep, filter, includes } from "lodash";
import { ActivatedRoute } from "@angular/router";

import { KmobileService } from "../../services/kmobile/kmobile.service";
import { Store } from "@ngrx/store";
import { loadMobileDetailView } from "../../store/actions/mobile.action";
import { getMobileState } from "../../store/selectors/mobile.selector";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.scss"],
})
export class MobileComponent implements OnInit {
  brandName: string = "";
  brandData: any;
  clonedBrandData: any;
  // filteredData: any;
  // review: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private kmobileService: KmobileService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((s: any) => {
      console.log(s);
      console.log(s.brand);
      this.brandName = s.brand;
      console.log(this.brandName);
      this.store.dispatch(loadMobileDetailView({ brandName: this.brandName }));
    });
    // this.kmobileService.getMobile(this.brandName).subscribe((d) => {
    //   console.log(d);
    //   this.brandData = d;
    //   this.clonedBrandData = cloneDeep(d);
    //   // console.log(this.clonedBrandData[0].review);
    // });
    this.store.select(getMobileState(this.brandName)).subscribe((storeData) => {
      console.log(storeData);
      this.brandData = storeData;
      this.clonedBrandData = cloneDeep(storeData);
    });
  }

  onFilterUpdate(data: {
    rating: number;
    minPrice: number;
    maxPrice: number;
    discount: Array<number>;
    battery: number;
  }): void {
    console.log(data); //{review: '3'}
    this.brandData = this.clonedBrandData.filter((a: any) => {
      const response =
        // a.rating >= data.rating &&
        // a.price > data.minPrice &&
        // a.price < data.maxPrice &&
        a.discount >= data.discount && a.mobile.battery >= data.battery;
      return response;
    });
    // console.log(this.filteredData);
    // this.clonedBrandData.review;
  }
}
