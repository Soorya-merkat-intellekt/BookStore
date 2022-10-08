import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BookStoreComponent } from './book-store/book-store.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { UpdateBookService} from './update-book.service';
import { PrevComponent } from './add-books/prev/prev.component';
import { IntervalComponent } from './interval/interval.component';
import { HttpClientModule } from'@angular/common/http';
import { CatlogueComponent } from './catlogue/catlogue.component';
import { LoginComponent } from './login/login.component';
// import { DataComponent } from './catlogue/data/data.component';
// import { DataComponent } from './catlogue/data/data.component';
// import { DataComponent } from './data/data.component';
// import { PageComponent } from './page/page.component';
// import { NewcomponentComponent } from './newcomponent/newcomponent.component';
// const router: Routes=[
// ]
@NgModule({
  declarations: [
    AppComponent,
    BookStoreComponent,
    AddBooksComponent,
    DisplayBooksComponent,
    PrevComponent,
    IntervalComponent,
    CatlogueComponent,
    LoginComponent,
    // DataComponent,
    // DataComponent,
    //  PageComponent,
    // NewcomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UpdateBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
