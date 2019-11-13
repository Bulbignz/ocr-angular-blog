import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html'
})
export class PostListItemComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.post.loveIts++;
  }

  unlike() {
    this.post.loveIts--;
  }

}
