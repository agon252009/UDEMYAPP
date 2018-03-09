import { Component, EventEmitter, Output, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  private _addIngredientEvent: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  private _name = '';
  private _amount = 0;

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get amount(): number {
    return this._amount;
  }

  public set amount(value: number) {
    this._amount = value;
  }

  public get infoIsValid(): boolean {
    return this._name.length > 0 && this._amount > 0;
  }

  @Output()
  public get addIngredientEvent(): EventEmitter<Ingredient> {
    return this._addIngredientEvent;
  }

  public onAddIngredientButtonClick(): void {
    this._addIngredientEvent.emit(new Ingredient(this._name, this._amount));
  }
}
