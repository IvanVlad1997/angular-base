import {Post} from '../common/post';
import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private postsUpdated: Subject<Post[]> = new Subject<Post[]>();

  constructor(private  http: HttpClient,
              private router: Router) {
  }

  getPosts(): void {
   this.http.get<{message: string, posts: any}>('http://localhost:3000/api/posts')
     .pipe(map((postData) => {
       return postData.posts.map(post => {
         return {
           title: post.title,
           content: post.content,
           id: post._id
         };
       });
     }))
     .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postsUpdated.next([...this.posts]);
     });
  }

  getPostUpdateListener(): Observable<Post[]> {
    return this.postsUpdated.asObservable()
  }

  addPost(title: string, content: string, image: File): void {
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('image', image, title),
    this.http.post<{message: string, postId: string}>('http://localhost:3000/api/posts', postData)
      .subscribe((response) => {
        const post = {
          id: response.postId,
          title: title,
          content: content,
          image: image
        }
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["/frontend"])
      });
  }

  updatePost(id: string, post: Post): void {
    let updatedPost: Post = {
      id: id,
      title: post.title,
      content: post.content
    };
    console.log(updatedPost)
    this.http.put('http://localhost:3000/api/posts/' + id, updatedPost)
      .subscribe((response) => {
        let updatedPosts = [...this.posts];
        let oldPostsIndex = updatedPosts.findIndex(p => p.id === post.id);
        updatedPosts[oldPostsIndex] = post;
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);
        this.router.navigate(["frontend"])
      })
  }


  deletePost(postId: string): void {
    this.http.delete('http://localhost:3000/api/posts/' + postId)
      .subscribe(() => {
        console.log('Deleted')
        let updatedPosts = this.posts.filter((post) =>  post.id !== postId);
        this.posts = updatedPosts;
        this.postsUpdated.next([...this.posts]);

      });
  }

  getPost(id: string) {
   return this.http.get<{_id: string, title: string, content: string}>('http://localhost:3000/api/posts/' + id);
  }
}
