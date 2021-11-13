import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Food} from "../../shared/food.model";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent  {
  @Input()foodItems: Food[] = [];
  @Input()drinkItems: Food[] = [];
  @Output() onAddFoodsItem = new EventEmitter<Food[]>();
  @Output() onAddDrinksItem = new EventEmitter<Food[]>();

  onAddDrinks($event: Food[]) {
    this.drinkItems = $event;
    this.onAddDrinksItem.emit(this.drinkItems);
  }

  onAddFoodItems($event: Food[]) {
    this.foodItems = $event;
    this.onAddFoodsItem.emit(this.foodItems);
  }
}
