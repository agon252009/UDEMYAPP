import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  private _addIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  @ViewChild('ingredientNameInput')
  private _ingredientNameInput: ElementRef;

  @ViewChild('ingredientAmountInput')
  private _ingredientAmountInput: ElementRef;


  @Output()
  public get addIngredientEvent(): EventEmitter<Ingredient> {
    return this._addIngredientEvent;
  }

  public onAddIngredientButtonClick(): void {
     this._addIngredientEvent.emit(new Ingredient(this._ingredientNameInput.nativeElement.value,
                                                  this._ingredientAmountInput.nativeElement.value));
  }
}
