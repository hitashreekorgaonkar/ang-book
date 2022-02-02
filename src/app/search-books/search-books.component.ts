import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {

  title: string;
  public attributes = [];
  // url: string = " ";
  url: string;
  public booksList = [];
  totalRecords: string;
  page: number = 1;

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    // this.getProductsOnFilter();
  }

  search() {
    this.getProductsOnFilter();
  }

  viewBookDetails(book) {
    console.log("book", book);
    console.log("book", book.key);
    let bookId = book.key ? book.key : null;
    console.log("bookId", bookId);

    this.router.navigate(['/book-details', { key: bookId }])
  }

  getProductsOnFilter() {
    // this.title = 'The Lord of the Rings'
    if (this.title && this.title.length > 0) {
      this.url = ("q=" + this.title);
    }

    console.log("url", this.url)

    this.bookService.getStoreFilterList(this.url).subscribe(
      (res: any) => {
        console.log("res", res)
        console.log("totalRecords", this.totalRecords = res.docs.length)
        console.log("booksList", this.booksList = res.docs)
      },
    )

  }

  pageChanged(event) {
    this.page = event;
    this.getProductsOnFilter();
  }

}
