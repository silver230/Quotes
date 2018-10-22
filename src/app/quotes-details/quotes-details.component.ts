import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  quotes = [
    new Quotes(1, 'A hungry man is a hungry man', 'bob marley', new Date(2018, 3, 14) ),
    new Quotes(2, 'The most intelligent person is  one who knows nothing', 'unknown', new Date('')),
  ];

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
constructor() { }

  ngOnInit() {
  }

}
