import { Component, OnInit, SimpleChange, ɵɵNgOnChangesFeature } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { CardListComponent } from "./ui/cardlist/cardlist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonComponent, CardsComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prodcut-app'
}