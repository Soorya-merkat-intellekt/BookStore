import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UpdateBookService {
books:any[]=[]
url:any
array:any=[];
authorname="";
producer="";
description="";
bookImage="";
search="";
BookAdded = new EventEmitter <boolean>()
  constructor(private http:HttpClient) { }

  addBooks(theName: any,theAuthor: any,theImage: any){
    this.books.push({
      name:theName.value, author:theAuthor.value, image:theImage.value, Availablity:"Available"
    })
}
getBooks(){
  return this.books
}
addedBooks(){
  this.BookAdded.emit(true)
}
// searchBook(name:any){
  //  this.url = "https://www.googleapis.com/books/v1/volumes?q=ikigai&filter=ebooks&key=AIzaSyAcjORnO644VmlXlgAWCiCPL1QNlFgAewE"
  // return this.http.get(this.url);
//   this.search=name.value
//   this.http.get("https://www.googleapis.com/books/v1/volumes?q="+this.search+"&filter=ebooks&key=AIzaSyAcjORnO644VmlXlgAWCiCPL1QNlFgAewE").subscribe(data=>{
//     this.array=data
//     this.authorname=(this.array.items[4].volumeInfo.authors);
//   })
// }

}

