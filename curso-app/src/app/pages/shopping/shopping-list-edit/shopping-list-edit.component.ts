import { IngredientModel } from "./../../../core/models/ingredient.model";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<IngredientModel>();
  constructor() {}

  ngOnInit(): void {}

  addIgredient(name: string, amount: number) {
    this.addIngredient.emit({ name, amount });
  }
}
