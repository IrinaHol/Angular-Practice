import { Component, OnInit } from '@angular/core';
import {PostsService, SubjectService} from '../../services';
import {IPost} from '../../interfaces';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: IPost[];
postDetails: IPost;
  constructor(private postService: PostsService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => this.posts = value);
    this.subjectService.getCurrentPost().subscribe(value => this.postDetails = value);
  }

}
