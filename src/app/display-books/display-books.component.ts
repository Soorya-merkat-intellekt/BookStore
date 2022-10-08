import { Component, OnInit } from '@angular/core';
import { UpdateBookService } from '../update-book.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
  book:any[]=[]
  

  constructor(private disPlay:UpdateBookService) { }

  ngOnInit(): void {
    this.book=this.disPlay.getBooks()
  }
  checkAvailablity(index:any){
    this.book[index].Availablity='Not Available'
  }
}
