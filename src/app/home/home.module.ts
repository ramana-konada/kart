import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuHeaderComponent } from "./components/menu-header/menu-header.component";
import { ProductsComponent } from "./components/products/products.component";
import { LoginComponent } from "./components/login/login/login.component";
import { MobilesStoreComponent } from "./components/mobiles-store/mobiles-store.component";
import { MobileComponent } from "./components/mobile/mobile.component";
import { FilterComponent } from "./components/mobile/filter/filter.component";
import { DashboardComponent } from "./components/mobile/dashboard/dashboard.component";
import { MobileDetailComponent } from "./components/mobile-detail/mobile-detail.component";
import { FormatPipe } from "./pipes/format.pipe";

import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressBarModule } from "@angular/material/progress-bar";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "menu", pathMatch: "full" },
      { path: "menu", component: MenuHeaderComponent },
      { path: "mobiles-store", component: MobilesStoreComponent },
      { path: "mobile/:brand", component: MobileComponent },
      //   { path: 'menu_header', component: MenuHeaderComponent },
      { path: "mobile-detail", component: MobileDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuHeaderComponent,
    ProductsComponent,
    LoginComponent,
    FormatPipe,
    MobilesStoreComponent,
    MobileComponent,
    FilterComponent,
    DashboardComponent,
    MobileDetailComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatRadioModule,
    MatProgressBarModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [],
})
export class HomeModule {}
