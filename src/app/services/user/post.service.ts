import {Injectable} from '@angular/core';
import {IPost} from '../../interface/post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }
  getPost(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(`${this.url}/posts`);
    }
}
