import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent {
  private _addIngredientEvent: EventEmitter<{}> = new EventEmitter();

  @Output()
  public get addIngredientEvent(): EventEmitter<{}> {
    return this._addIngredientEvent;
  }

  public onAddIngredientButtonClick(): void {
     this._addIngredientEvent.emit();
  }
}
