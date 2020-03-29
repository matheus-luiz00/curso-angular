import { Injectable, EventEmitter } from '@angular/core';
import { IngredientModel } from 'src/app/core/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  ingredientsChanged = new EventEmitter<void>();
  private ingredients: IngredientModel[] = [
    new IngredientModel("Apples", 5),
    new IngredientModel("Tomatos", 5)
  ];

  constructor() { }

  public getIngredients() {
    return this.ingredients.slice();
  }

  addIgredient(name: string, amount: number) {
    this.ingredients.push({ name, amount });
    this.ingredientsChanged.emit();
  }

  addIgredients(ingredients: IngredientModel[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit();
  }
}
