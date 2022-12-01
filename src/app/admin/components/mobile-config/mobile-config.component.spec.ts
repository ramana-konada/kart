import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileConfigComponent } from './mobile-config.component';

describe('MobileConfigComponent', () => {
  let component: MobileConfigComponent;
  let fixture: ComponentFixture<MobileConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
