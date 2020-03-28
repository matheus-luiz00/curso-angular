import { RecipeModel } from "./../models/recipe.model";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"]
})
export class RecipeItemComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<RecipeModel>();

  @Input() recipe: RecipeModel;

  constructor() {}

  ngOnInit(): void {}
}
