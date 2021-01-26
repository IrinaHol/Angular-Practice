import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/users/user/user.component';
import { HeaderComponent } from './components/header/header/header.component';
import {UserResolveService} from './services/resolve/user-resolve.service';
import {PostResolveService} from './services/resolve/post-resolve.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { FullPostComponent } from './components/full-post/full-post.component';
const routes: Routes = [
  {path: 'users', component: UsersComponent, resolve: {usersData: UserResolveService}, children: [
      {path: ':id', component: FullUserComponent}]},
  {path: 'posts', component: PostsComponent, resolve: {postsData: PostResolveService}, children: [
      {path: ':id', component: FullPostComponent}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    FullUserComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
