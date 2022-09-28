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
  
  public loading: boolean = false;
  public blogs: iBlog[] = [];
  public errorMessage: string | null = null;

  constructor(private blogService:BlogService, private router: Router) {}

  ngOnInit(): void {

  }

  public deleteBlog(blogId: any) {
      if(blogId){
        this.blogService.deleteBlog(blogId).subscribe((data) => {
          this.loading = true;
          this.blogService.getAllBlogs().subscribe((data) => {
            this.blogs = data;
            window.location.reload()
            this.loading = false;
          },(error) => {
            this.errorMessage = error;
            this.loading = false;
          });
        });
      }
  }

}
