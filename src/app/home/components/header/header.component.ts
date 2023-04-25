import { Component, OnInit } from "@angular/core";
import { LoginComponent } from "../login/login/login.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  // languages = [
  //   { value: "en", viewValue: "English" },
  //   { value: "de", viewValue: "Deutsch" },
  //   { value: "ar", viewValue: "عربي" },
  // ];
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.common();
  }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "520px",
      panelClass: "login-dialog",
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  common(): string {
    return "hello";
  }
  // openTranstations() {}
  changeLang(l: any) {
    console.log(l);
  }
}
