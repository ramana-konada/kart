import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let dialog: MatDialog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [BrowserAnimationsModule, MatToolbarModule, MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should call common method", () => {
    spyOn(component, "common").and.returnValue("test");

    const response = component.common();

    expect(response).toEqual("test");
  });

  it("should call ngOnInit method", () => {
    spyOn(component, "common").and.callThrough();

    component.ngOnInit();

    expect(component.common).toHaveBeenCalled();
    expect(component.common).toHaveBeenCalledTimes(1);
  });

  it("should call opendialog method", () => {
    spyOn(dialog, "open").and.callThrough();

    const response = component.openDialog();

    expect(dialog.open).toHaveBeenCalled();
  });
});
