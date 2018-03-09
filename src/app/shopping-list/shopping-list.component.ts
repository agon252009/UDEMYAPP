import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent {

  private readonly _ingredients: Ingredient[] = [];

  public get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }
}
