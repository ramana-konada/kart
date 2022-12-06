import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { AgGridAngular } from "ag-grid-angular";
import { CellClickedEvent, ColDef, GridReadyEvent } from "ag-grid-community";
import { Observable } from "rxjs";
import { loadOrderList } from "../../store/orderlist-store/orderlist.action";
import { selectFeatureOrderList } from "../../store/orderlist-store/orderlist.selector";
import { DatecellrendererComponent } from "./datecellrenderer/datecellrenderer.component";
import { PricecellrendererComponent } from "./pricecellrenderer/pricecellrenderer.component";

@Component({
  selector: "app-orderslist",
  templateUrl: "./orderslist.component.html",
  styleUrls: ["./orderslist.component.scss"],
})
export class OrderslistComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: "userName", pinned: "left" },
    { field: "productName" },
    { field: "productId" },
    { field: "productMfgDate" },
    { field: "productPrice", cellRenderer: PricecellrendererComponent },
    { field: "userAddress", width: 300 },
    { field: "orderNumber" },
    { field: "orderDate", cellRenderer: DatecellrendererComponent },
    { field: "orderDispatchDate" },
    { field: "orderStatus" },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    editable: true,
  };

  // Data that gets displayed in the grid
  // public rowData$!: Observable<any[]>;

  public rowData: any;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private store: Store) {}

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.store.dispatch(loadOrderList());
    // this.store.select(selectFeatureOrderList).subscribe((e) => {
    //   console.log(e);
    // });
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    // this.rowData$ = this.http.get<any[]>(
    //   "https://www.ag-grid.com/example-assets/row-data.json"
    // );

    this.store.select(selectFeatureOrderList).subscribe((e: any) => {
      console.log(e);
      this.rowData = e;
    });
  }
  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log("cellClicked", e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
