import {Component, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe';
import {RecipeService} from '../services/recipe.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(recipeService: RecipeService, router: Router) {
    this.router = router;
    this.recipeService = recipeService;
  }

  recipeService: RecipeService;
  private router: Router;
  recipes: Recipe[];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe): void {
    this.router.navigate([`/recipes/${recipe.id}`])
    // this.recipeService.recipeSelected.emit(recipe);
  }
}
