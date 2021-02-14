import { Component } from '@angular/core';
import { UserService } from './user.service';
import { BookService } from './book.service';

interface IFriend {
  friendname: string;
  friendage: number;
  friendschool: string;
}

interface IBook {
  bookname: string;
  bookprice: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  friendname: string;
  friendage: number;
  friendschool: string;
  bookname: number;
  bookprice: number;
  friendList: Array<IFriend>;
  BookList: Array<IBook>;


  constructor(
    private userService: UserService,
    private bookService: BookService, ){
    this.friendList = [];
    this.getUsers();
    this.BookList = [];
    this.getBooks();
  }

  addFriend(): void {
    const friend = {
      name: this.friendname,
      age: this.friendage,
      school: this.friendschool,
    };
    this.userService.createUser(friend).subscribe((res: any) => {
      this.getUsers();
    });    
  }

  deleteFriend(id: string): void {
    this.userService.deleteUser(id).subscribe((res: any) => {
      this.getUsers();
    })
  }

  addBook():void {
    const book = {
      name: this.bookname,
      price: this.bookprice,
    }
    this.bookService.createBook(book).subscribe((res: any) => {
      this.getBooks();
    });
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe((res: any) => {
      this.getBooks();
    })
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.friendList = res.data;
    });
  }

  getBooks(): void {
    this.bookService.getBooks().subscribe((res: any) => {
      this.BookList = res.data;
    });
  }
}
