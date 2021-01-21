import {Component, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../../interfaces/User';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;

  @Output()
  bubbleUp = new EventEmitter<IUser>();

  constructor() {
  }

  ngOnInit(): void {
  }

  getPostInfo(user: IUser): void {
    this.bubbleUp.emit(user);
  }
}
