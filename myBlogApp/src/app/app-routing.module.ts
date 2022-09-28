import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path : '', redirectTo: 'blog/admin', pathMatch : 'full'},
{path : 'blog',  loadChildren:() => import('./blog/blog.module').then(m=>m.BlogModule)},
{path : 'book',  loadChildren:() => import('./book/book.module').then(m=>m.BookModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
