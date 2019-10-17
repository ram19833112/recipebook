import { Component, Input } from '@angular/core';
import { ShoppinglistService } from './shopping-list/shopinglist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppinglistService]
})
export class AppComponent {
  title = 'recipebook';

  @Input() featureSelected: string = 'recipe';
  onNavigate(feature: string) {
    this.featureSelected = feature;
  }
}
