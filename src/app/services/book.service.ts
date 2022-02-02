import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private url = "https://randomuser.me/api";
  constructor(private http: HttpClient) { }

  // public getStoreFilterList(url) {
  //   return this.http.get(`http://openlibrary.org/search.json?${url}`);

  // }

  // public getStoreFilterList(url): Observable<any> {
  //   return this.http.get(`http://openlibrary.org/search.json?${url}`);
  // }

  getStoreFilterList(url) {
    return this.http.get(`http://openlibrary.org/search.json?${url}`);
  }

  getBookDetail(key) {
    return this.http.get('http://openlibrary.org'+key+'.json');
  }

  // getStoreFilterList(url) {
  //   return this.http.get<any>(`http://openlibrary.org/search.json?${url}`);
  // }

  // getComplains(schoolDocId) {
  //   return this.http.get<any>(this.url + 'schoolMange/getAllComplains/'+ schoolDocId);
  // }

}
