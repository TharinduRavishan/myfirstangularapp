import { Component } from '@angular/core';
import { UserService } from './user.service';

interface IFriend {
  name: string;
  age: number;
  school: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  age: number;
  school: string;
  friendList: Array<IFriend>;

  constructor(private userService: UserService) {
    this.friendList = [];
    this.getUsers();
  }

  addFriend(): void {
    const friend = {
      name: this.name,
      age: this.age,
      school: this.school,
    };
    this.userService.createUser(friend).subscribe((res: any) => {
      this.getUsers();
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.friendList = res.data;
    });
  }
}
