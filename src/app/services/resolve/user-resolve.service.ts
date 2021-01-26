import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../interface/user';
import {Resolve} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser[]> {
  users: IUser[];
  constructor(private userService: UserService) { }


  resolve(): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
  return this.userService.getUsers();
}
}
