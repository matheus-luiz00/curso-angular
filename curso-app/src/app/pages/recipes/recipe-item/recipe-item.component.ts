import { RecipeModel } from "./../models/recipe.model";
import { Component, OnInit, Input } from "@angular/core";
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: RecipeModel;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void { }

  onSelectRecipe() {
    this.recipesService.recipeSelected.emit(this.recipe);
  }
}
