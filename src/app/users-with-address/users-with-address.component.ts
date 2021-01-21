import { Component, OnInit } from '@angular/core';
import {usersWithAddress} from '../../data/data';

@Component({
  selector: 'app-users-with-address',
  templateUrl: './users-with-address.component.html',
  styleUrls: ['./users-with-address.component.css']
})
export class UsersWithAddressComponent implements OnInit {

  usersWithAddress: any[] = usersWithAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
