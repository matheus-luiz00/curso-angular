import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "./../models/recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  public recipes: RecipeModel[] = [
    new RecipeModel(
      "Test Recipe",
      "A Delicious Test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg"
    ),
    new RecipeModel(
      "Meatballs",
      "Spagetti with tomato sauce and meatballs",
      "https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg"
    ),
    new RecipeModel(
      "Turkey Mearloaf",
      "An easy and tasty turky meatloaf recipe",
      "https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
