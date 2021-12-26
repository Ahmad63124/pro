import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StoreComponent } from './store/store.component';
import { FilterComponent } from './filter/filter.component';
import { RateComponent } from './rate/rate.component';
import { FormcComponent } from './formc/formc.component';
import { FooterComponent } from './footer/footer.component';
import { FpageComponent } from './fpage/fpage.component';
import { FormsModule } from '@angular/forms';
import { StorelistComponent } from './storelist/storelist.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    StoreComponent,
    FilterComponent,
    RateComponent,
    FormcComponent,
    FooterComponent,
    FpageComponent,
    StorelistComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
