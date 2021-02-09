import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {SubjectService} from '../../../services/subject.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;
  activeValue: number;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private subjectService: SubjectService) {

  }


  ngOnInit(): void {

  }

  getPost(post): void {
    this.subjectService.setNewPost(post);
    this.subjectService.getCurrentPost().subscribe(value => this.activeValue = value.id);

    // this.router.navigate([this.post.id], {relativeTo: this.activatedRouter, state: this.post});
  }
}
