import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private readonly _recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Description',
      'http://images.media-allrecipes.com/userphotos/720x405/5055712.jpg'
    ),
    new Recipe(
      'Test Recipe 02',
      'Test Description 02',
      'http://images.media-allrecipes.com/userphotos/720x405/4996289.jpg'
    )
  ];

  private _recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  ngOnInit(): void {
    this._recipeSelected.emit(this._recipes[0]);
  }

  @Output()
  public get recipeSelected(): EventEmitter<Recipe> {
    return this._recipeSelected;
  }
  public get recipes(): Recipe[] {
    return this._recipes;
  }

  public onRecipeSelected(value: Recipe): void {
     this._recipeSelected.emit(value);
  }
}
