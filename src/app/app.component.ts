import { Component } from '@angular/core';
import { navigation } from './shared/navigation.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private _currentNavigationSelected = navigation.recipes;

  public get currentNavigationSelected(): navigation {
    return this._currentNavigationSelected;
  }

  public navigationSelected(value: navigation): void {
    this._currentNavigationSelected = value;
  }
}
