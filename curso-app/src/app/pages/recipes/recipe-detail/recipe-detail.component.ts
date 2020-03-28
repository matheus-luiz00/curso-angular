import { RecipeModel } from "./../models/recipe.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  @Input() set recipeModel(model: RecipeModel) {
    this.recipe = model;
  }
  recipe: RecipeModel;

  constructor() {}

  ngOnInit(): void {}
}
