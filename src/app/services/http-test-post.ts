import {Injectable} from '@angular/core';
import {Post} from '../common/post';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class HttpTestPost {

  error: Subject<string> = new Subject<string>()

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  createAndStorePost(post: Post): void {
    this.httpClient
      .post('https://angular--test.firebaseio.com/posts.json',
        post,
        {
          observe: 'response'
        })
      .subscribe(responseData => {
        console.log(responseData)
      },
        (error) => {
        this.error.next(error.message)
        })
  }

  fetchPost(): Observable<Post[]>  {
    return this.httpClient
      .get('https://angular--test.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({}),
          params: new HttpParams().set('print', 'pretty')
        })
      .pipe(map((response) => {
        let postArray: Post[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            postArray.push({...response[key], id: key})
          }
        }
        return postArray;
      }))

  }

  clearPosts(): Observable<object> {
    return this.httpClient.delete('https://angular--test.firebaseio.com/posts.json')
  }
}
