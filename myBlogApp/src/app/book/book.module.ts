import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookItemComponent } from './components/book-item/book-item.component';



@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookItemComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports: [BookListComponent]
})
export class BookModule { }
