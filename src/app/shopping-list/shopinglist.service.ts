import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs';
export class ShoppinglistService {

    ingredientAdded = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5), new Ingredient("Tomatoes", 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addRecipeIngredients(rcpIngredients: Ingredient[]) {
        this.ingredients.push(...rcpIngredients);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}