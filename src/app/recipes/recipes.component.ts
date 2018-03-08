import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  private _currentRecipe: Recipe;

  public get currentRecipe(): Recipe {
    return this._currentRecipe;
  }

  public  onRecipeSelected(value: Recipe) {
    this._currentRecipe = value;
  }
}
