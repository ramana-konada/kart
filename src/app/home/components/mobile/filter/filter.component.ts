import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { includes } from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Output() onFilterUpdate = new EventEmitter<any>();
  filter: {
    rating?: number;
    minPrice?: number;
    maxPrice: number;
    discount: number;
    battery: number;
  } = {
    minPrice: 25000,
    maxPrice: 35000,
    rating: 4,
    discount: 19,
    battery: 7000,
  };

  constructor() {}

  ngOnInit(): void {}

  customerRatingChange(event: any, value: number): void {
    if (event.target.checked) {
      this.filter = {
        ...this.filter,
        rating: value,
      };
      console.log(this.filter);
      this.onFilterUpdate.emit(this.filter);
    }
  }

  customerPriceChange(eventRef: any, type: string): void {
    if (type === 'min') {
      this.filter = {
        ...this.filter,
        minPrice: parseInt(eventRef.target.value),
      };
    } else if (type === 'max') {
      this.filter = {
        ...this.filter,
        maxPrice: parseInt(eventRef.target.value),
      };
    }
    console.log(eventRef);
    this.onFilterUpdate.emit(this.filter);
  }

  discountChange(discountRef: any, value: number): void {
    if (discountRef.target.checked) {
      this.filter = {
        ...this.filter,
        discount: value,
      };
      console.log(this.filter);
      this.onFilterUpdate.emit(this.filter);
    }
  }
  checkedBattery(batteryRef: any, value: number) {
    if (batteryRef.target.checked) {
      this.filter = {
        ...this.filter,
        battery: value,
      };
      console.log(this.filter);
      this.onFilterUpdate.emit(this.filter);
    }
  }
}
