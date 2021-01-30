import { Component } from '@angular/core';

interface IFriend {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  age: number;
  friendList: Array<IFriend>;

  constructor() {
    this.friendList = [];
  }

  addFriend(): void {
    const friend = {
      id: this.friendList.length,
      name: this.name,
      age: this.age,
    };
    this.friendList.push(friend);
    this.name = null;
    this.age = null;
  }

  deleteFriend(id: number): void {
    this.friendList.splice(id, 1);
  }
}
