import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.url}/posts`);
  }

  // getPostById(id): Observable<IPost> {
  //   return this.httpClient.get<IPost>(`${this.url}${id}/posts`);
  // }
}
