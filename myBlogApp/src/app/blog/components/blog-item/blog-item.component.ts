import { Component, OnInit } from '@angular/core';
import { iBlog } from '../../blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {

  public loading: boolean = false;
  public blogs: iBlog[] = [];
  public errorMessage: string | null = null;


  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

}
