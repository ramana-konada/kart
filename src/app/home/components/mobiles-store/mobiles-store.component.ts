import { Component, OnInit } from '@angular/core';
import { KmobileService } from '../../services/kmobile/kmobile.service';

@Component({
  selector: 'app-mobiles-store',
  templateUrl: './mobiles-store.component.html',
  styleUrls: ['./mobiles-store.component.scss'],
})
export class MobilesStoreComponent implements OnInit {
  itemList: Array<{
    model: string;
    avatar: string;
    speciality: string;
    brand: string;
    price: number;
    features: { display: string; battery?: string; cam?: string };
  }> = [];
  constructor(private kmobileService: KmobileService) {}

  ngOnInit(): void {
    this.kmobileService.getMobiles().subscribe((s) => {
      this.itemList = s;
    });
  }
}
