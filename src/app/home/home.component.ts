import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLoadingState } from './store/selectors/home.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loadingState$ = this.store.select(getLoadingState);
  constructor(private store: Store) {}

  ngOnInit(): void {}
}
