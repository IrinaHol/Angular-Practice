import { Component, OnInit } from '@angular/core';
import {users} from '../../data/data';
import {ActivatedRoute} from '@angular/router';
import {IUsers} from '../../interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUsers[] = users;
  constructor(private  activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => (value.id));
  }

  ngOnInit(): void {
  }

}
