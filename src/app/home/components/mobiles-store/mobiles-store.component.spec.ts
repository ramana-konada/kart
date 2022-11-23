import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesStoreComponent } from './mobiles-store.component';

describe('MobilesComponent', () => {
  let component: MobilesStoreComponent;
  let fixture: ComponentFixture<MobilesStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobilesStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobilesStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
