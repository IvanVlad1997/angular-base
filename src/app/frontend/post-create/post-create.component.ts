import {Component, OnInit} from '@angular/core';
import {Post} from '../common/post';
import {PostService} from '../services/post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {mimeType} from '../validator/mime-type.validator';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  private mode: string = 'create';
  postId: string = undefined;
  post: Post;
  isLoading: boolean= false;
  form: FormGroup;
  imagePreview: string | ArrayBuffer;

  constructor(private postService: PostService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      content: new FormControl(null, {validators: [Validators.required]}),
      image: new FormControl(null, {validators: [Validators.required], asyncValidators: [mimeType]})
    })
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap)
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postService.getPost(this.postId)
          .subscribe(postData  => {
            this.isLoading = false;
            this.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content
            }
            this.form.setValue({
              title: this.post.title,
              content: this.post.content,
              image: '',
            })
          })
      } else {
        this.mode = 'create';
        this.postId = null;
      }

    })
  }


  save(): void {
    if(this.form.invalid) {
      return;
    }
    let newPost = {
      title: this.form.value.title,
      content: this.form.value.content,
      id: undefined,
    };
    if (this.mode === 'create'){
      this.postService.addPost(this.form.value.title, this.form.value.content, this.form.value.image)
    } else {
      this.postService.updatePost(this.postId, newPost)
    }
    this.form.reset()
  }

  onImagePick(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }
}

