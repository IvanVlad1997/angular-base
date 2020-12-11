import {Component, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  recipeService: RecipeService;
  recipes: Recipe[];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe): void {
    this.recipeService.recipeSelected.emit(recipe);
  }
}
