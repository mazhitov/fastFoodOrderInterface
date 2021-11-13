import {Component, Input} from '@angular/core';
import {Food} from "../../../shared/food.model";

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css']
})
export class FoodItemsComponent {
    @Input() foodItems:Food[] = [];
}
