import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quotes( 1, 'A hungry man,is a, hungry man', 'bill'),
    new Quotes( 1, 'A hungry man,is a, hungry man', 'bill'),
    new Quotes( 1, 'A hungry man,is a, hungry man', 'bill')
  ];
  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
        }
        }
   constructor() { }

  ngOnInit() {
  }

}
