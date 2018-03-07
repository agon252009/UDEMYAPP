import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  private _recipesSelected: EventEmitter<{}> = new EventEmitter();

  @Output()
  public get recipesSelected(): EventEmitter<{}> {
    return this._recipesSelected;
  }

  public onRecipesSelected(): void {
    this._recipesSelected.emit();
  }
}
