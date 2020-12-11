import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../services/recipe.service';
import {Recipe} from '../common/recipe';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  private recipeService: RecipeService;

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  selectedRecipe: Recipe;

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((selectedRecipe: Recipe) => {
      this.selectedRecipe = selectedRecipe;
    });
  }
}
