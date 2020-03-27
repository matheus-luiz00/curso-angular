import { Component, OnInit } from "@angular/core";

import { IngredientModel } from "./../../../core/models/ingredient.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  public ingredients: IngredientModel[] = [
    new IngredientModel("Apples", 5),
    new IngredientModel("Tomatos", 5)
  ];

  constructor() {}

  ngOnInit(): void {}
}
