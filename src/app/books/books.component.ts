import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: any = {};

  constructor(private sharedService: SharedService) {
    sharedService.apiData.subscribe(books => this.books = books)
  }

  ngOnInit(): void {
  }

}
