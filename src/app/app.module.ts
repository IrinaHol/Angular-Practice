import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostsComponent } from './post/posts/posts.component';
import { PostComponent } from './post/posts/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import {PostModule} from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PostModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
