import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName', { static: false }) inputNameRef: ElementRef;
  @ViewChild('inputAmount', { static: false }) inputAmountRef: ElementRef;


  constructor(private shopinglistService: ShoppinglistService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingname = this.inputNameRef.nativeElement.value;
    const ingamount = this.inputAmountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingname, ingamount);
    this.shopinglistService.addIngredient(newIngredient);
  }

}
