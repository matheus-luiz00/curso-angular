import { Component, OnInit } from "@angular/core";

import { IngredientModel } from "./../../../core/models/ingredient.model";
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  public ingredients: IngredientModel[] = [];

  constructor(
    private shoppingService: ShoppingService
  ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingService.ingredientsChanged.subscribe(() =>
      this.ingredients = this.shoppingService.getIngredients()
    );
  }
}
