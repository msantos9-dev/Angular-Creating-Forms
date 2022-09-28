import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  commandBarAction(event:string){
    this.router.navigate(['book/' + event]);
}

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
