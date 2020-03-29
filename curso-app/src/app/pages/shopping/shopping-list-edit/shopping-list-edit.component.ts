import { Component, OnInit } from "@angular/core";
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: "app-shopping-list-edit",
  templateUrl: "./shopping-list-edit.component.html",
  styleUrls: ["./shopping-list-edit.component.css"]
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void { }

  addIgredient(name: string, amount: number) {
    this.shoppingService.addIgredient(name, amount);
  }
}
