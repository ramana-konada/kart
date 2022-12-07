import { Component, OnInit } from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { ICellEditorParams, ICellRendererParams } from "ag-grid-community";

@Component({
  selector: "app-text-cell-editor",
  templateUrl: "./text-cell-editor.component.html",
  styleUrls: ["./text-cell-editor.component.scss"],
})
export class TextCellEditorComponent implements ICellEditorAngularComp {
  params: any;

  agInit(params: ICellEditorParams): void {
    console.log(params.value);
    this.params = params.value;
  }

  getValue() {}
}
