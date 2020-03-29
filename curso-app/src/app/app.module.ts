import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { RecipeListComponent } from "./pages/recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./pages/recipes/recipe-item/recipe-item.component";
import { RecipeDetailComponent } from "./pages/recipes/recipe-detail/recipe-detail.component";
import { ShoppingListComponent } from "./pages/shopping/shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./pages/shopping/shopping-list-edit/shopping-list-edit.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";
import { DropdownDirective } from './core/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
