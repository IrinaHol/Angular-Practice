import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {UserService} from '../../services/users.service';
import {IUser} from '../../interfaces/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
@Output()
  eventEmitter = new EventEmitter<IUser>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  bubbleUser(user: IUser): void {
    this.eventEmitter.emit(user);
  }
}
