import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopinglist.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe('Dosa', 'A roasted Dosa',
        'https://upload.wikimedia.org/wikipedia/commons/0/0b/Dosa_and_ghee.jpg',
        [new Ingredient('Minapagullu', 1), new Ingredient('Rice', 1)]),
    new Recipe('Fried Rice', 'Chicken Fried Rice',
        'https://369t7u43n93dgc5pt43uc681-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/teriyaki-salmon-fried-rice-8.jpg',
        [new Ingredient('Rice', 1), new Ingredient('Onion', 1)])
    ];

    constructor(private shoppinglistService: ShoppinglistService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppinglistService.addRecipeIngredients(ingredients);
    }
}