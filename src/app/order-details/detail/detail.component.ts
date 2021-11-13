import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Food} from "../../../shared/food.model";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() foodsItem: Food[] = [];
  @Input() drinksItem: Food[] = [];
  @Output() changeFoodsItem = new EventEmitter<Food[]>();
  @Output() changeDrinksItem = new EventEmitter<Food[]>();

  onDeleteFoodsItem(i: number) {
    this.foodsItem[i].number = 0;
    this.changeFoodsItem.emit(this.foodsItem);
  }

  onDeleteDrinksItem(i: number) {
    this.drinksItem[i].number = 0;
    this.changeDrinksItem.emit(this.drinksItem);
  }
}
