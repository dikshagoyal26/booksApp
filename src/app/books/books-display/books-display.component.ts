import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-books-display',
  templateUrl: './books-display.component.html',
  styleUrls: ['./books-display.component.css']
})
export class BooksDisplayComponent implements OnInit {
  @Input() book: any;
  public modalRef: BsModalRef;
  public dispbook: any
  starTotal = 5;
  stars: any
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  viewDetails(book: any, template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' })
    );
    this.book.authors = book.volumeInfo.authors.join(' , ')
    this.dispbook = book
    let rating = book.volumeInfo.averageRating
    const starPercentage = (rating / this.starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    this.stars = starPercentageRounded

  }
}
