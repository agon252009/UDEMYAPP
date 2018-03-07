import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  private _isRecipesSelected = true;
  private _isShoppingListSelected = false;

  public get isRecipesSelected(): boolean {
    return this._isRecipesSelected;
  }

  public get isShoppingListSelected(): boolean {
    return this._isShoppingListSelected;
  }

  public selectRecipes(): void {
    this._isRecipesSelected = true;
    this._isShoppingListSelected = false;
  }

  public selectShoppingList(): void {
    this._isShoppingListSelected = true;
    this._isRecipesSelected = false;
  }
}
