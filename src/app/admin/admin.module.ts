import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { RouterModule, Routes } from "@angular/router";
import { MobileConfigComponent } from "./components/mobile-config/mobile-config.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { adminInitialState } from "./store/admin.state";
import { MatSelectModule } from "@angular/material/select";
import { OrderslistComponent } from "./components/orderslist/orderslist.component";
import { AgGridModule } from "ag-grid-angular";
import { DatecellrendererComponent } from "./components/orderslist/datecellrenderer/datecellrenderer.component";
import { PricecellrendererComponent } from "./components/orderslist/pricecellrenderer/pricecellrenderer.component";
import { TextCellEditorComponent } from "./components/orderslist/text-cell-editor/text-cell-editor.component";
import { CustomPinnedRowRendererComponent } from './components/orderslist/custom-pinned-row-renderer/custom-pinned-row-renderer.component';

const routes: Routes = [
  { path: "mobile-config", component: MobileConfigComponent },
  { path: "orderslist", component: OrderslistComponent },
];
@NgModule({
  declarations: [
    MobileConfigComponent,
    OrderslistComponent,
    DatecellrendererComponent,
    PricecellrendererComponent,
    TextCellEditorComponent,
    CustomPinnedRowRendererComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    AgGridModule,
  ],
})
export class AdminModule {}
