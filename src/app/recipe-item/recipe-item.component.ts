import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../common/recipe';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor(recipeService: RecipeService) {
    this.recipeService = recipeService;
  }

  @Input()
  recipe: Recipe;
  recipeService: RecipeService;

  ngOnInit(): void {
  }

}
