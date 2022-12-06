import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecellrendererComponent } from './datecellrenderer.component';

describe('DatecellrendererComponent', () => {
  let component: DatecellrendererComponent;
  let fixture: ComponentFixture<DatecellrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatecellrendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatecellrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
