import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test',
      'This is simply a test',
      'https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg'
    ),
    new Recipe(
      'A test',
      'This is simply a test',
      'https://www.budgetbytes.com/wp-content/uploads/2013/07/How-to-Calculate-Recipe-Costs-H.jpg'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
