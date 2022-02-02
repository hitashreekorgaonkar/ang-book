import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { SearchBooksComponent } from './search-books/search-books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search-books',
    pathMatch: 'full'
  },
  {
    path: 'search-books',
    component: SearchBooksComponent,
  },
  {
    path: 'book-details',
    component: BookDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }