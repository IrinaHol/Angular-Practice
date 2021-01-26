import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {PostService} from '../user/post.service';
import {IPost} from '../../interface/post';
import {Resolve} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postService: PostService)  {
  }


  resolve(): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postService.getPost();
  }
}
