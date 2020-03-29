import { RecipeModel } from "./../models/recipe.model";
import { Component, OnInit, Input } from "@angular/core";
import { RecipesService } from '../services/recipes.service';

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

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void { }

  onToShoppingList() {
    this.recipeService.transferToShoppingList(this.recipe.ingredients);
  }
}
