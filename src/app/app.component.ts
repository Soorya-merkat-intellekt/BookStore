import { Component, OnInit } from '@angular/core';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { UpdateBookService } from './update-book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // bookAdded=false;
  constructor (private updatedBook:UpdateBookService){}
  
  ngOnInit(): void {
    // this.updatedBook.BookAdded.subscribe(data => {
    //   this.bookAdded = data;
    // })

  }

  }
