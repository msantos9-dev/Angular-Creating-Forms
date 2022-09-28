import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
{path : '', redirectTo : 'blog/admin', pathMatch : 'full'},
{path : 'blog/admin', component : BlogListComponent},
{path : 'blog/edit/:blogId', component : BlogFormComponent},
{path : 'blog/add', component : BlogFormComponent},
{path : 'book/admin', component : BookListComponent},
{path : 'book/edit/:bookId', component : BookFormComponent},
{path : 'book/add', component : BookFormComponent},
{path : '**', component : BlogListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
