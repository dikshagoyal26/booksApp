import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }
  fetchData(value) {
    if (value && value.trim().length > 0) {
      this.getData(value)
    }
  }
  getData(val) {
    if (val) {
      this.sharedService.fetchData(val)
    }
  }
}
