import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  private readonly _recipes: Recipe[] = [
    new Recipe('Test Recipe',
      'Test Description',
      'http://images.media-allrecipes.com/userphotos/720x405/5055712.jpg')
    ,
    new Recipe('Test Recipe 02',
      'Test Description 02',
      'http://images.media-allrecipes.com/userphotos/720x405/4996289.jpg')
  ];

  get recipes(): Recipe[] {
    return this._recipes;
  }

  constructor() { }

  ngOnInit() {
  }

}
