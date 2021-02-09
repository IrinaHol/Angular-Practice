import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private postDetails = new BehaviorSubject<IPost>(null);

  constructor() { }

  getCurrentPost(): BehaviorSubject<IPost> {
    return this.postDetails;
  }
  setNewPost(post): void {
    this.postDetails.next(post);
  }
}
