import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ICategoriesModal } from '../../modals/categories.modal';
import { KbodyService } from '../../services/kbody/kbody.service';
import { KheaderService } from '../../services/kheader/kheader.service';
import { loadCategories, loadMenus } from '../../store/actions/home.action';
import {
  getCategoriesState,
  getMenuState,
} from '../../store/selectors/home.selector';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {
  categories: Array<{ label: string; classname: string; route: string }> = [];

  beautyCard?: ICategoriesModal;
  festiveCard?: ICategoriesModal;
  winterCard?: ICategoriesModal;
  sportsCard?: ICategoriesModal;
  // beautyCard: {
  //   id: string;
  //   imageUrl: string;
  //   name: string;
  //   percentageText: string;
  //   availableBrands: string;
  // }[] = [];

  constructor(
    private kheaderService: KheaderService,
    private kbodyService: KbodyService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.select(getMenuState).subscribe((s) => {
      this.categories = s;
    });
    // this.kbodyService
    //   .getBody()
    //   .subscribe(
    //     ([beauty, festive, winter, sports]: [
    //       ICategoriesModal,
    //       ICategoriesModal,
    //       ICategoriesModal,
    //       ICategoriesModal
    //     ]) => {
    //       // .subscribe((beauty) => {
    //       // console.log(beauty);
    //       this.beautyCard = beauty;
    //       this.festiveCard = festive;
    //       this.winterCard = winter;
    //       this.sportsCard = sports;
    //       // this.beautyCard.push(beauty);
    //     }
    //   );
    this.store.dispatch(loadMenus());
    this.store.dispatch(loadCategories());
    this.store.select(getCategoriesState).subscribe((s: any) => {
      console.log(s);
      this.beautyCard = s.beauty;
      this.festiveCard = s.womensaree;
      this.winterCard = s.winter;
      this.sportsCard = s.sports;
    });
  }
  // mobileRoute() {
  //   this.kheaderService.gettingHearder().subscribe((s) => {
  //     console.log(s);
  //     if (s[2]) {
  //       console.log(s[2].label);
  //     }
  //   });
  // }
}
