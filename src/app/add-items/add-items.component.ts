import {Component, Input} from '@angular/core';
import {Food} from "../../shared/food.model";

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent  {
  @Input()foodItems: Food[] = [];
  @Input()drinkItems: Food[] = [];

}
