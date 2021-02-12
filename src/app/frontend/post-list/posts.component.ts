import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../common/post';
import {PostService} from '../services/post';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy {
  panelOpenState: boolean = false;
  postSubscription: Subscription;
  posts: Post[] = [];

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit(): void {
    this.postService.getPosts();
    this.postSubscription = this.postService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

  onDelete(id: string): void {
    this.postService.deletePost(id)
  }
}
