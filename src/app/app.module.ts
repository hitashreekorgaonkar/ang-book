import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchBooksComponent } from './search-books/search-books.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
//for toast
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BookDetailsComponent } from './book-details/book-details.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchBooksComponent,
    BookDetailsComponent,
    NavbarComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
