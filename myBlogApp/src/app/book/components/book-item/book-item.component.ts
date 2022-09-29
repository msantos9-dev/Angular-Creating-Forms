import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { iBook } from '../../book.models';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() book?: iBook | undefined;
  @Output() bookDeleteEmitter = new EventEmitter();
  
  public loading: boolean = false;
  public books: iBook[] = [];
  public errorMessage: string | null = null;

  deleteBook(bookId: any){
    this.bookDeleteEmitter.emit(bookId);
  }

  constructor() {}

  ngOnInit(): void {

  }

}
