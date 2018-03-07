import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  private _recipesSelected = new EventEmitter();
  private _shoppingListSelected = new EventEmitter();

  @Output()
  public get recipesSelected(): EventEmitter<{}> {
    return this._recipesSelected;
  }

  @Output()
  public get shoppingListSelected(): EventEmitter<{}> {
    return this._shoppingListSelected;
  }

  public onRecipesSelected(): void {
    this._recipesSelected.emit();
  }

  public onShoppingListSelected(): void {
    this._shoppingListSelected.emit();
  }
}
