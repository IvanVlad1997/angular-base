import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../common/ingredient';

@Injectable()
export class ShoppingList {

  ingredientChange: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    {
      name: 'Apple',
      amount: 12
    },
    {
      name: 'Pie',
      amount: 23
    }
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]): void {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientChange.emit(this.ingredients.slice());
  }
}
