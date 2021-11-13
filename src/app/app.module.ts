import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { FoodItemsComponent } from './add-items/food-items/food-items.component';
import { DrinkItemsComponent } from './add-items/drink-items/drink-items.component';
import { DetailComponent } from './order-details/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddItemsComponent,
    OrderDetailsComponent,
    FoodItemsComponent,
    DrinkItemsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
