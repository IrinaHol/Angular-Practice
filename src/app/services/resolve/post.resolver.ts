import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {IPost} from '../../interfaces';
import {PostsService} from '../posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost[]> {
  constructor(private postService: PostsService) {
  }
  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPosts();
  }
}
