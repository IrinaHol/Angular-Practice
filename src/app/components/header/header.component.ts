import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../interfaces';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  post: IPost;
  ost;
  constructor() { }

  ngOnInit(): void {
  }

}
