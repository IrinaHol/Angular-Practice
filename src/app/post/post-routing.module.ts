import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {PostResolver} from '../services/resolve/post.resolver';
import {FullPostComponent} from './posts/full-post/full-post.component';

const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {postData: PostResolver}, children: [
      {path: ':id', component: FullPostComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
