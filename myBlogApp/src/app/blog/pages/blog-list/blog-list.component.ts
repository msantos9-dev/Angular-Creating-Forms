import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { iBlog } from '../../blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  public loading: boolean = false;
  public blogs: iBlog[] = [];
  public errorMessage: string | null = null;


  constructor(private blogService: BlogService) { }

   ngOnInit(): void {
    this.loading = true;
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
      this.loading = false;
    },(error) => {
      this.errorMessage = error;
      this.loading = false;
    });

    }

}
