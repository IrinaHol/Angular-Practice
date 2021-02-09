import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {PostResolver} from '../services/resolve/post.resolver';
import {PostsService} from '../services';
import { FullPostComponent } from './posts/full-post/full-post.component';


@NgModule({
    declarations: [FullPostComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        HttpClientModule
    ],
    exports: [
        FullPostComponent
    ],
    providers: [PostsService, PostResolver]
})
export class PostModule { }
