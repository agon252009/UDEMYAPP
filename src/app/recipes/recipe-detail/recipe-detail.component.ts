import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  private _recipe: Recipe;

  public get recipe(): Recipe {
    return this._recipe;
  }

  @Input()
  public set recipe(value: Recipe) {
    this._recipe = value;
  }
}
