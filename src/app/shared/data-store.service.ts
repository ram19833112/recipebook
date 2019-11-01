import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStoreService {

    recipes: Recipe[];
    constructor(private http: HttpClient, private recipeService: RecipeService) { }


    storeData() {
        this.recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-httpreq-practice.firebaseio.com/recipes.json', this.recipes).subscribe((response) => {
            console.log(response)
        })

    }
    // to resolve the data before loading the page, we will be calling this method in resolver also so we subscribe this in component
    fetchData() {
        return this.http.get<Recipe[]>('https://ng-httpreq-practice.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }),
                tap(repicies => {
                    this.recipeService.setRecipes(repicies);
                }));
    }

}