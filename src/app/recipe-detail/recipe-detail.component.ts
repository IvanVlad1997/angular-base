import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {


  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  @Input() selectedRecipe: Recipe;
  toggleButton: boolean = false;
  recipeService: RecipeService;

   ngOnInit(): void {
  }

  toggleButtonAction(): void {
    this.toggleButton = !this.toggleButton;
  }

  moveToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }
}
