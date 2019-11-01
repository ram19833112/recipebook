import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopinglist.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    /*private recipes: Recipe[] = [new Recipe('Dosa', 'A roasted Dosa',
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_and_ghee.jpg',
        [new Ingredient('Minapagullu', 1), new Ingredient('Rice', 1)]),
    new Recipe('Fried Rice', 'Chicken Fried Rice',
        'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/teriyaki-salmon-fried-rice-8.jpg',
        [new Ingredient('Rice', 1), new Ingredient('Onion', 1)])
    ];*/

    private recipes: Recipe[] = [];

    constructor(private shoppinglistService: ShoppinglistService) { }

    setRecipes(recipies: Recipe[]) {
        this.recipes = recipies;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addRecipeIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}