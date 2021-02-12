import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HeaderAwareComponent} from '../frontend-utils/header-aware-component';
import {Post} from './common/post';


@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.scss']
})
export class FrontendComponent implements OnInit, HeaderAwareComponent {

  @ViewChild('header')
  header: TemplateRef<any>;

  posts: Post[] = [];

  constructor( ) {  }

  ngOnInit(): void {
  }

  createPost(post: Post): void {
    this.posts.push(post);
    console.log(this.posts);
  }
}
