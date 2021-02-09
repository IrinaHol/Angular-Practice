import {Component, OnInit} from '@angular/core';
import {IPost} from './interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  post: IPost;


  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    // this.activatedRoute.data.subscribe(value =>
    //   // this.user = value.userData
    //   console.log('Тут має бути юзік', value)
    // );
  }
}
