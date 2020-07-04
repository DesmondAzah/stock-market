import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Stock} from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'stock-market';
  public stockObj: Stock;
  public stock: Stock;
  ngOnInit(): void {
    this.stockObj  =  new Stock('Test Stock Company', 'TSC', 85, 80);
  }
  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stock.favorite = !this.stock.favorite;
  }
}
