import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../common/recipe';
import {Ingredient} from '../common/ingredient';
import {ShoppingList} from './shopping-list';
import {ServerEleven} from '../common/serverEleven';

@Injectable()
export class RecipeService {

  private shoppingListService: ShoppingList;

  constructor(shoppingListService: ShoppingList) {
    this.shoppingListService = shoppingListService;
  }

  recipes: Recipe[] = [
    {
      id: 1,
      name: 'Ciobă,băsadasd!',
      description: 'Ciorbă d-aia bună',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      ingredients: [
        {name: 'Apple Pie', amount: 10},
        {name: 'Buns', amount: 20}
        ]
    },
    {
      id: 2,
      name: 'Ciobă,bă!',
      description: 'Ciorbă d-aia bună',
      image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872',
      ingredients: [
        {name: 'Apple Pie', amount: 10},
        {name: 'Buns', amount: 20}
        ]
    }
  ];

  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();


  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    let recipe = this.recipes.find(
      (recipeParam: Recipe ) => {
        return (recipeParam.id === id);
      });
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
