import { Component } from '@angular/core';
import {Food} from "../shared/food.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  foodItems: Food[] = [
    new Food('Hamburger', 0, 50, '../../assets/fastFoods/hamburger.png'),
    new Food('Cheeseburger', 0, 20, '../../assets/fastFoods/cheeseburger.png'),
    new Food('Fries', 0, 5, '../../assets/fastFoods/french-fries.png'),
  ];
  drinkItems: Food[] = [
    new Food('Coffee', 0, 5, '../../assets/drinks/coffee-cup.png'),
    new Food('Tea', 0, 20, '../../assets/drinks/tea.png'),
    new Food('Cola', 0, 50, '../../assets/drinks/cola.png'),
  ];

  onChangeDeleteFoodsItem($event: Food[]) {
    this.foodItems = $event;
    console.log(this.foodItems);
  }

  onChangeDeleteDrinksItem($event: Food[]) {
    this.drinkItems = $event;
    console.log(this.drinkItems);
  }

  onChangeAddFoodsItem($event: Food[]) {
    this.foodItems = $event;
    console.log(this.foodItems);
  }

  onChangeAddDrinksItem($event: Food[]) {
    this.drinkItems = $event;
    console.log(this.drinkItems);
  }
}
