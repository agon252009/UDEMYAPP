import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  private _recipe: Recipe;
  private _recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Output()
  public get recipeSelected(): EventEmitter<Recipe> {
    return this._recipeSelected;
  }

  public get recipe(): Recipe {
    return this._recipe;
  }

  @Input()
  public set recipe(value: Recipe) {
    this._recipe = value;
  }

  public clicked(): void {
    this._recipeSelected.emit(this._recipe);
  }
}
