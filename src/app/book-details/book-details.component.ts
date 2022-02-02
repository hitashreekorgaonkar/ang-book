import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { BookDetailDTO } from './book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  bookKey: string;
  ngOnInit(): void {
    this.bookKey = this.route.snapshot.params["key"];
    this.getBookDetails(this.bookKey);
  }

  bookdetail: BookDetailDTO;

  getBookDetails(key) {
    this.bookService.getBookDetail(key).subscribe(
      (res: any) => {
        // console.log("res", res)
        console.log("res", this.bookdetail = res)
      },

    )

  }
}
