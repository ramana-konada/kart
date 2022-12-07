import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCellEditorComponent } from './text-cell-editor.component';

describe('TextCellEditorComponent', () => {
  let component: TextCellEditorComponent;
  let fixture: ComponentFixture<TextCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCellEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
