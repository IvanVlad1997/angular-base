import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../common/post';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'
import {HttpTestPost} from '../services/http-test-post';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit, OnDestroy {

  private httpClient: HttpClient;
  private postService: HttpTestPost;

  constructor(httpClient: HttpClient, postService: HttpTestPost) {
    this.postService = postService;
    this.httpClient = httpClient;
  }



  isFetching: boolean = false;
  loadedPosts: Post[] = [];
  title: string;
  content: string;
  error: string = null;
  errorSub: Subscription

  ngOnInit(): void {
    this.errorSub = this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage
    })
    this.isFetching = true;
    this.postService.fetchPost()
      .subscribe(posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        (error => {
          this.error = error.message;
          this.isFetching = false;
        }));
  }
  onClearPosts(): void {
    this.postService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }

  onCreatePost(): void {
    let post: Post = {
      title: this.title,
      content: this.content,
      id: undefined
    }
    this.postService.createAndStorePost(post);
  }

  onFetchPosts(): void {
    this.isFetching = true;
    this.postService.fetchPost()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
        (error => {
            this.error = error.message;
            this.isFetching = false;
            console.log(error)
        }));
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe()
  }

}
