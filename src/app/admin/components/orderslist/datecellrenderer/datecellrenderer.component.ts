import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import * as moment from "moment";
// import { format } from 'date-fns' // 21K (gzipped: 5.8K)
// import moment from "moment";

@Component({
  selector: "app-datecellrenderer",
  templateUrl: "./datecellrenderer.component.html",
  styleUrls: ["./datecellrenderer.component.scss"],
})
export class DatecellrendererComponent implements ICellRendererAngularComp {
  public cellValue!: string;

  agInit(params: ICellRendererParams): void {
    // throw new Error("Method not implemented.");
    // this.cellValue = moment().format("L");
    let d = params.value.split("-");
    let renderedDate = `${d[1] + "-" + d[0] + "-" + d[2]}`;
    // console.log(renderedDate);
    this.cellValue = moment(renderedDate).format("L");
    // console.log(this.cellValue);
  }

  refresh(params: ICellRendererParams<any, any>): boolean {
    // throw new Error("Method not implemented.");
    this.cellValue;
    return true;
  }

  // getValueToDisplay(params: ICellRendererParams) {
  //   return params.valueFormatted ? params.valueFormatted : params.value;
  // }
  // public cellValue!: string;

  // gets called once before the renderer is used
  // agInit(params: ICellRendererParams): void {
  //   this.cellValue = this.getValueToDisplay(params);
  // }

  // gets called whenever the user gets the cell to refresh
  // refresh(params: ICellRendererParams) {
  //   // set value into cell again
  //   this.cellValue = this.getValueToDisplay(params);
  //   return true;
  // }
}
