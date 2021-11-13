import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Food} from "../../../shared/food.model";

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent {
    @Input() foodItems:Food[] = [];
    @Output() addFoodItems = new EventEmitter<Food[]>();

  onClickFoodItems(index: number) {
    this.foodItems[index].number++;
    this.addFoodItems.emit(this.foodItems);
  }
}
