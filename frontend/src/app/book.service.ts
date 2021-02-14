import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks():Observable<any> {
  return this.http.get('http://localhost:3000/api/book/all');
  }

  createBook(book:any): Observable<any> {
  return this.http.post('http://localhost:3000/api/book', book);
  }

  updateBook(book: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/book', book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/book?id=${id}`);
  }
}