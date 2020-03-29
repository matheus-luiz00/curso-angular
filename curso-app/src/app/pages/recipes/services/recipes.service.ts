import { Injectable, EventEmitter } from '@angular/core';
import { RecipeModel } from '../models/recipe.model';
import { IngredientModel } from 'src/app/core/models/ingredient.model';
import { ShoppingService } from '../../shopping/services/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public recipeSelected = new EventEmitter<RecipeModel>();

  private recipes: RecipeModel[] = [
    new RecipeModel(
      "Test Recipe",
      "A Delicious Test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg",
      [
        new IngredientModel('Letter E', 2),
        new IngredientModel('Letter T', 2),
        new IngredientModel('Letter S', 1),
        new IngredientModel('Letter R', 1),
        new IngredientModel('Letter C', 1),
        new IngredientModel('Letter I', 1),
        new IngredientModel('Letter P', 1)
      ]
    ),
    new RecipeModel(
      "Meatballs",
      "Spagetti with tomato sauce and meatballs",
      "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg",
      [
        new IngredientModel('Spagetti (pack)', 1),
        new IngredientModel('Meat (g)', 500),
        new IngredientModel('Tomatos', 2),
        new IngredientModel('Cheese (g)', 250)
      ]
    )
  ];

  constructor(private shoppingService: ShoppingService) { }

  public getRecipes() {
    return this.recipes.slice();
  }

  transferToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingService.addIgredients(ingredients);
  }
}
