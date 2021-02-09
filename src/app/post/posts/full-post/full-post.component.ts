import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IPost} from '../../../interfaces';
import {SubjectService} from '../../../services';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  chosePost: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private subjectService: SubjectService) {
    // this.activatedRoute.params.subscribe(value =>
    //   this.post = this.router.getCurrentNavigation().extras.state as IPost);
  }

  ngOnInit(): void {
    this.subjectService.getCurrentPost().subscribe(value => this.chosePost = value);
  }

}
