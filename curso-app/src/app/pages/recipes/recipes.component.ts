import { RecipeModel } from "./models/recipe.model";
import { Component, OnInit } from "@angular/core";
import { RecipesService } from './services/recipes.service';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(recipe => {
      this.selectedRecipe = recipe;
    });
  }
}
