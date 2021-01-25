import {Component, Input, OnInit} from '@angular/core';
import {IUsers} from '../../../interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  users: IUsers;
  classname = 'target';
  constructor() { }

  ngOnInit(): void {
  }

}
