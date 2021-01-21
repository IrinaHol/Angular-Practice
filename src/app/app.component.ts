import {Component} from '@angular/core';
import {PostServices} from './services/post.services';
import {Post} from './interfaces/Post';
import {IUser} from './interfaces/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];


  constructor(private postService: PostServices) {

  }

  getId(user: IUser): void {
    this.postService.getPostByUserId(user.id).subscribe(value => this.posts = value);
  }
}



