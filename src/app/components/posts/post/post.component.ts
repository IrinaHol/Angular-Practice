import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interface/post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post: IPost;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
  }
  getPost(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRouter, state: this.post});
  }
}
