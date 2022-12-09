import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-pricecellrenderer",
  templateUrl: "./pricecellrenderer.component.html",
  styleUrls: ["./pricecellrenderer.component.scss"],
})
export class PricecellrendererComponent implements ICellRendererAngularComp {
  public cellValue!: number;

  constructor() {}

  agInit(params: ICellRendererParams): void {
    this.cellValue = params.value;
    console.log(this.cellValue);
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    this.cellValue;
    return true;
  }
}
