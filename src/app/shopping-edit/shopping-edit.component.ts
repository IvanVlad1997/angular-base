import {Component, OnInit, Output} from '@angular/core';
import {Ingredient} from '../common/ingredient';
import {ShoppingList} from '../services/shopping-list';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  private shoppingListService: ShoppingList;

  constructor(shoppingListService: ShoppingList) {
    this.shoppingListService = shoppingListService;
  }

  name: string;
  amount: number;

  ngOnInit(): void {
  }

  addIngredient(): void {
    let newIngredient: Ingredient = {
      name : this.name,
      amount: this.amount
    };
    this.shoppingListService.addIngredient(newIngredient);
    this.clear();
  }

  clear(): void {
    this.name = '';
    this.amount = null;
  }
}
