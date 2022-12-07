import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { combineLatest } from "rxjs";
import { loadOrderList } from "../../store/orderlist-store/orderlist.action";
import {
  selectFeatureGridList,
  selectFeatureOrderList,
} from "../../store/orderlist-store/orderlist.selector";
import { TextCellEditorComponent } from "./text-cell-editor/text-cell-editor.component";

@Component({
  selector: "app-orderslist",
  templateUrl: "./orderslist.component.html",
  styleUrls: ["./orderslist.component.scss"],
})
export class OrderslistComponent implements OnInit {
  columnDefs: ColDef[] = [];
  // [
  //   { field: "userName", pinned: "left" },
  //   {
  //     field: "productName",
  //     editable: true,
  //     cellEditor: "agTextCellEditorComponent",
  //     width: 300,
  //   },
  //   { field: "productId" },
  //   { field: "productMfgDate" },
  //   { field: "productPrice", cellRenderer: PricecellrendererComponent },
  //   { field: "userAddress", width: 300 },
  //   { field: "orderNumber" },
  //   { field: "orderDate", cellRenderer: DatecellrendererComponent },
  //   { field: "orderDispatchDate" },
  //   { field: "orderStatus" },
  // ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  rowData: any;
  components: object = {};

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private store: Store) {
    this.components = {
      agTextCellEditorComponent: TextCellEditorComponent,
    };
  }

  ngOnInit(): void {
    this.store.dispatch(loadOrderList());
  }

  onGridReady(params: GridReadyEvent) {
    combineLatest([
      this.store.select(selectFeatureOrderList),
      this.store.select(selectFeatureGridList),
    ]).subscribe(([orders, gridInfo]) => {
      this.rowData = orders;
      this.columnDefs = gridInfo.map((s: any) => {
        return {
          field: s.fieldName,
          editable: s.editable,
          datatype: s.dataType,
          cellEditor: "agTextCellEditorComponent",
          width: this.getWidth(s.dataType),
          rootObject: s,
        };
      });
    });
  }

  getWidth(datatype: string) {
    if (datatype === "string") {
      return 200;
    } else if (datatype === "number") {
      return 150;
    } else if (datatype === "date") {
      return 200;
    } else {
      return 300;
    }
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log("cellClicked", e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
