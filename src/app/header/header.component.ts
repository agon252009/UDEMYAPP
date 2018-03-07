import { Component, EventEmitter, Output } from '@angular/core';
import { navigation } from '../shared/navigation.enum';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  private _navigationSelectedEvent = new EventEmitter<navigation>();
  private test = navigation.recipes;

  @Output()
  public get navigationSelectedEvent() {
    return this._navigationSelectedEvent;
  }

  public onNavigationSelected(value: navigation) {
    this._navigationSelectedEvent.emit(value);
  }
}
