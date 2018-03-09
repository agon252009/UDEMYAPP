import { Component, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  private _addIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();



  @Output()
  public get addIngredientEvent(): EventEmitter<Ingredient> {
    return this._addIngredientEvent;
  }

  public onAddIngredientButtonClick(): void {

     this._addIngredientEvent.emit(new Ingredient());
  }
}
