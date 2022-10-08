import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UpdateBookService } from '../update-book.service';
@Component({
  selector: 'app-catlogue',
  templateUrl: './catlogue.component.html',
  styleUrls: ['./catlogue.component.css']
})
export class CatlogueComponent implements OnInit {
detail:any=[]
  constructor( private http:HttpClient,private update:UpdateBookService) { 
  //   this.detail=[]
  }
  array:any=[];
  authorname="";
  amount="";
  textSnippet="";
  bookImage="";
  search="";
  ngOnInit() {
    //  this.getBookDetails()
    //  console.log(this.detail.item[0].volumeInfo.authors[0]);
    //  console.log("tydu"); 
  }
  // getBookDetails(){
  //   this.update.getData().subscribe((data: any)=>{
  //     console.log(data);
  //     this.detail=data;
  //   })
  // }
  // searchBook(name:any){
    
  // }
  // searchBook(name:any){
  //   this.search=name.value
  //   this.http.get

  // }
  getBookDetails(name:any){
    this.search=name.value;
    this.http.get("https://www.googleapis.com/books/v1/volumes?q="+this.search+"&filter=ebooks&key=AIzaSyAcjORnO644VmlXlgAWCiCPL1QNlFgAewE").subscribe(data=>{
      console.log(data);
      this.array=data
      this.authorname=(this.array.items[0].volumeInfo.authors);
      this. amount=(this.array.items[0].saleInfo.listPrice.amount);
      this.textSnippet=(this.array.items[0].searchInfo.textSnippet);
      this.bookImage=(this.array.items[0].volumeInfo.imageLinks.smallThumbnail);
  })
  }
    // this.update.searchBook().subscribe((data:any)=>{
    //   this.detail=data
    // })
}
