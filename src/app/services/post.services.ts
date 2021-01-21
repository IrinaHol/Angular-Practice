import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../interfaces/Post';

@Injectable({
  providedIn: 'root'
})
export class PostServices {

  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) {
  }

  getPostByUserId(id): Observable<Post[]>{
    return this.httpClient.get<Post[]>(`${this.url}?userId=${id}`);
  }
}
