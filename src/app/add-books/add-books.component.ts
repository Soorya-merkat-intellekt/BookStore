import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { UpdateBookService } from '../update-book.service';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  // name:string='';
  // author:string='';
  // image:string='';
  // pageSelected='';
  url = '';// used in event binding
  imagep ='';
  bookAdded=false;
  // imageUrl:any;
  // url=[];
  constructor(private onAdd:UpdateBookService, private updatebook: UpdateBookService, private updatedBook:UpdateBookService) { }
  ngOnInit(): void {
    this.updatedBook.BookAdded.subscribe(data => {
      this.bookAdded = data;
    })
  }
  onSave(bookName:any,bookAuthor: any,bookImage: any){
    this.onAdd.addBooks(bookName,bookAuthor,bookImage);
    this.updatebook.addedBooks();
  }
  // showImagePreview(){
  // }
  onUpdateFile(event:Event){
    this.imagep = (event.target as HTMLInputElement).value;
    console.log(this.imagep);
  }
}


// event binding method

// onUpdateFile(event:Event){
//   this.url = (event.target as HTMLInputElement).value;
// }