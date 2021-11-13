import {Component, Input} from '@angular/core';
import {Food} from "../../../shared/food.model";

@Component({
  selector: 'app-drink-items',
  templateUrl: './drink-items.component.html',
  styleUrls: ['./drink-items.component.css']
})
export class DrinkItemsComponent  {
  @Input() drinkItems: Food[] = [];

}
