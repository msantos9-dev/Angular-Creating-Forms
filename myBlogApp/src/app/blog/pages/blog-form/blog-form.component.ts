import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  blogForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.blogForm = this.formBuilder.group({
    
      title: [null, Validators.required],
      description: [null, Validators.required],
      author: [null, Validators.required],
      comments: [null, Validators.required],
 
    });
  }

  submit() {
    if (!this.blogForm.valid) {
      return;
    }
    console.log(this.blogForm.value);
  }

  hasRoute(route: string){
    return this.router.url.includes(route);
  }

}
