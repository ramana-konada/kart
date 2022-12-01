import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeModule } from "./home/home.module";
import { KheaderService } from "./home/services/kheader/kheader.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffect } from "./home/store/effects/home.effect";
import { environment } from "src/environments/environment";
import { MobileEffect } from "./home/store/effects/mobile.effect";
import { kartReducer } from "./home/store/reducers/kart-bundle.reducer";
import { AdminModule } from "./admin/admin.module";
import { adminReducer } from "./admin/store/admin.reducer";
import { orderListReducer } from "./admin/store/orderlist-store/orderlist.reducer";
import { OrderListEffect } from "./admin/store/orderlist-store/orderlist.effect";

const NGRXDevTools = environment.production
  ? []
  : [StoreDevtoolsModule.instrument({ maxAge: 25 })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
