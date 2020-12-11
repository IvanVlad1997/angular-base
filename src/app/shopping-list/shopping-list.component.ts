import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../common/ingredient';
import {ShoppingList} from '../services/shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListService: ShoppingList;

  constructor(shoppingListService: ShoppingList) {
    this.shoppingListService = shoppingListService;
  }

  ingredients: Ingredient[];

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChange
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }


}
