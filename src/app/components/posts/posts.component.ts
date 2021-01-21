import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../interfaces/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
posts: Post[];
  constructor() { }

  ngOnInit(): void {
  }

}
