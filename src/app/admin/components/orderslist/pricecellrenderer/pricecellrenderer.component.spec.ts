import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecellrendererComponent } from './pricecellrenderer.component';

describe('PricecellrendererComponent', () => {
  let component: PricecellrendererComponent;
  let fixture: ComponentFixture<PricecellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricecellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricecellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
