import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe';
import {RecipeService} from '../services/recipe.service';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {


  constructor(recipeService: RecipeService,
              route: ActivatedRoute) {
    this.route = route;
    this.recipeService = recipeService;
  }

  selectedRecipe: Recipe;
  toggleButton: boolean = false;
  recipeService: RecipeService;
  private route: ActivatedRoute;

   ngOnInit(): void {
     this.route.params.subscribe((params) => {
      let id: number = +params.id;
      this.selectedRecipe = this.recipeService.getRecipe(id);
     });
  }

  toggleButtonAction(): void {
    this.toggleButton = !this.toggleButton;
  }

  moveToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);
  }

}
