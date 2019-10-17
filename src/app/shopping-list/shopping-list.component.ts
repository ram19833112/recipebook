import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shopinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shopinglistService.getIngredients();
    this.shopinglistService.ingredientAdded.subscribe(
      (ingredents: Ingredient[]) => { this.ingredients = ingredents; }
    );
  }

}
