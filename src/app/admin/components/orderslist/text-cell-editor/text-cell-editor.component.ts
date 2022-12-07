import { Component, OnInit } from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { ICellEditorParams, ICellRendererParams } from "ag-grid-community";
import { cloneDeep } from "lodash";

@Component({
  selector: "app-text-cell-editor",
  templateUrl: "./text-cell-editor.component.html",
  styleUrls: ["./text-cell-editor.component.scss"],
})
export class TextCellEditorComponent implements ICellEditorAngularComp {
  value: any;
  colDef: any;

  agInit(params: ICellEditorParams & any): void {
    const newParam = cloneDeep(params);
    this.value = newParam.value;
    console.log(newParam.colDef);
    this.colDef = newParam.colDef;
  }

  getValue() {}
}
