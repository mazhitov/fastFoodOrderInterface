import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Food} from "../../shared/food.model";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent{
  @Input() foodItems: Food[] = [];
  @Input() drinkItems: Food[] = [];
  @Output() changeFoodsItem = new EventEmitter<Food[]>();
  @Output() changeDrinksItem = new EventEmitter<Food[]>();

  onChangeFoodsItem($event: Food[]) {
    this.foodItems = $event;
    this.changeFoodsItem.emit(this.foodItems);
  }

  onChangeDrinksItem($event: Food[]) {
    this.drinkItems = $event;
    this.changeDrinksItem.emit(this.drinkItems);
  }

  getTotalSum() {
    const foodTotal = this.foodItems.reduce((acc, item)=> {
      return acc + item.getTotal();
    },0);
    return foodTotal + this.drinkItems.reduce((acc, item) => {
      return acc + item.getTotal();
    },0);
  }
}
