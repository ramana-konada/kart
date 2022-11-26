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
import { homeReducer } from "./home/store/reducers/home.reducer";
import { EffectsModule } from "@ngrx/effects";
import { HomeEffect } from "./home/store/effects/home.effect";
import { environment } from "src/environments/environment";
import { mobileStoreReducer } from "./home/store/reducers/mobile.reducer";
import { MobileEffect } from "./home/store/effects/mobile.effect";

const NGRXDevTools = environment.production
  ? []
  : [StoreDevtoolsModule.instrument({ maxAge: 25 })];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { app: mobileStoreReducer },
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreModule.forFeature("kart", homeReducer),
    EffectsModule.forRoot([HomeEffect, MobileEffect]),
    NGRXDevTools,
  ],
  providers: [KheaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
