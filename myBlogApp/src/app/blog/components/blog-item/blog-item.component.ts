import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { iBlog } from '../../blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  @Input() blog?: iBlog | undefined;
  @Output() deleteBlogEmitter = new EventEmitter
  
  public loading: boolean = false;
  public blogs: iBlog[] = [];
  public errorMessage: string | null = null;

  constructor() {}
  
  public deleteBlog(blogId: any) {
    this.deleteBlogEmitter.emit(blogId);
  }

  ngOnInit(): void {

  }


}
