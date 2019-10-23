import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private igChangeSub: Subscription;

  ingredients: Ingredient[];

  constructor(private shopinglistService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shopinglistService.getIngredients();
    this.igChangeSub = this.shopinglistService.ingredientAdded.subscribe(
      (ingredents: Ingredient[]) => { this.ingredients = ingredents; }
    );
  }
  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

}
