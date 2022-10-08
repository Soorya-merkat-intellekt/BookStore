


import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext, Router } from '@angular/router';
@Component({
  selector: 'app-book-store',
  templateUrl: './book-store.component.html',
  styleUrls: ['./book-store.component.css']
})
export class BookStoreComponent implements OnInit {
// @Output() onSelect = new EventEmitter();
// name:string='';
// author:string='';
// image:string='';
// pageSelected='';
  constructor(private route:Router) { }
  ngOnInit(): void {
  }
  //  clicked(e:any){
  //   this.onSelect.emit(e)
  //  }
  onNavigate(option:string){
    if (option=='login') {
      this.route.navigateByUrl('/login')
    } else if (option=='add') {
      this.route.navigateByUrl('/addbooks')
    } else if (option=='display') {
      this.route.navigateByUrl('/displaybooks')
    }
     else{
      this.route.navigateByUrl('/catlogue')
    }
  }
}















