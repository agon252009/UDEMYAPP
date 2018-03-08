import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  private _name: string;
  private _description: string;
  private _imageUrl: string;

  public get name(): string {
    return this._name;
  }

  @Input()
  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  @Input()
  public set description(value: string) {
    this._description = value;
  }

  public get imageUrl(): string {
    return this._imageUrl;
  }

  @Input()
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
