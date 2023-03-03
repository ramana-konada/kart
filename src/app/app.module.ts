import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffect } from "./home/store/effects/home.effect";
import { MobileEffect } from "./home/store/effects/mobile.effect";
import { kartReducer } from "./home/store/reducers/kart-bundle.reducer";
import { orderListReducer } from "./admin/store/orderlist-store/orderlist.reducer";
import { OrderListEffect } from "./admin/store/orderlist-store/orderlist.effect";
import { adminReducer } from "./admin/store/admin.reducer";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";
import { KheaderService } from "./home/services/kheader/kheader.service";
import { environment } from "src/environments/environment";

const NGRXDevTools = environment.production
  ? []
  : [StoreDevtoolsModule.instrument({ maxAge: 25 })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HomeModule,
    AdminModule,
    StoreModule.forRoot(
      { admin: adminReducer, order: orderListReducer },
      {
        runtimeChecks: {
          // strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreModule.forFeature("kart", kartReducer),
    EffectsModule.forRoot([HomeEffect, MobileEffect, OrderListEffect]),
    NGRXDevTools,
  ],
  providers: [KheaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
