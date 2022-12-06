import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-pricecellrenderer",
  templateUrl: "./pricecellrenderer.component.html",
  styleUrls: ["./pricecellrenderer.component.scss"],
})
export class PricecellrendererComponent implements ICellRendererAngularComp {
  //   agInit(params: ICellRendererParams<any, any>): void {
  //     throw new Error("Method not implemented.");
  //   }
  //   refresh(params: ICellRendererParams<any, any>): boolean {
  //     throw new Error("Method not implemented.");
  //   }

  //   ngOnInit(): void {}
  // }
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
