import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "./../models/recipe.model";
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {

  public recipes: RecipeModel[];

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
  }
}
