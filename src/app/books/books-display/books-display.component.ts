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
  starTotal = 5;
  stars: any
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  viewDetails(template: TemplateRef<any>) {
    this.book.authors = this.book.volumeInfo.authors.join(' , ')
    let rating = this.book.volumeInfo.averageRating
    const starPercentage = (rating / this.starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    this.stars = starPercentageRounded
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}
