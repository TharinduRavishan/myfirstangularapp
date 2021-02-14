import { Component } from '@angular/core';
import { UserService } from './user.service';
import { BookService } from './book.service';

interface IFriend {
  _id?: string;
  name: string;
  age: number;
  school: string;
}

interface IBook {
  _id?: string;
  name: string;
  price: number;
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
  bookname: string;
  bookprice: number;
  friendList: Array<IFriend>;
  BookList: Array<IBook>;

  currentFriendId: string;
  currentBookId: string;

  constructor(
    private userService: UserService,
    private bookService: BookService
  ) {
    this.friendList = [];
    this.getUsers();
    this.BookList = [];
    this.getBooks();
  }

  addFriend(): void {
    const friend: IFriend = {
      name: this.friendname,
      age: this.friendage,
      school: this.friendschool,
    };

    if (!this.currentFriendId) {
      this.userService.createUser(friend).subscribe((res: any) => {
        this.getUsers();
      });
    } else {
      friend._id = this.currentFriendId;
      this.userService.updateUser(friend).subscribe((res: any) => {
        this.currentFriendId = null;
        this.getUsers();
      });
    }
  }

  deleteFriend(id: string): void {
    this.userService.deleteUser(id).subscribe((res: any) => {
      this.getUsers();
    });
  }

  editFriend(id: string): void {
    this.currentFriendId = id;
    const currentFriend = this.friendList.find(
      ({ _id }) => _id === this.currentFriendId
    );
    this.friendname = currentFriend.name;
    this.friendschool = currentFriend.school;
    this.friendage = currentFriend.age;
  }

  addBook(): void {
    const book: IBook = {
      name: this.bookname,
      price: this.bookprice,
    };

    if (!this.currentBookId) {
      this.bookService.createBook(book).subscribe((res: any) => {
        this.getBooks();
      });
    } else {
      book._id  = this.currentBookId;
      this.bookService.updateBook(book).subscribe((res: any) => {
        this.currentBookId = null;
        this.getBooks();
      });
    }
  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe((res: any) => {
      this.getBooks();
    });
  }

  editBook(id: string): void {
    this.currentBookId = id;
    const currentBook = this.BookList.find(
      ({ _id }) => _id === this.currentBookId
    );
    this.bookname = currentBook.name;
    this.bookprice = currentBook.price;
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
