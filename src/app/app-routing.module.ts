import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { DisplayBooksComponent } from './display-books/display-books.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { CatlogueComponent } from './catlogue/catlogue.component';
import { LoginComponent } from './login/login.component';
const router: Routes = [
   {path:'', component:BookStoreComponent},
   {path:'addbooks',component:AddBooksComponent},
   {path:'displaybooks',component:DisplayBooksComponent},
   {path:'catlogue',component:CatlogueComponent},
   {path:'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
