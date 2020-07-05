import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  count = 0
  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }
  fetchData(value) {
    console.log(value)
    if (value && value.trim().length > 0) {
      console.log(value)
      this.getData(value)
    }
    // this.debounce(this.getData, 300, value)
  }
  debounce(fn, delay, value) {
    let timer;
    return function () {
      let context = this
      clearTimeout(timer);
      let value = arguments
      timer = setTimeout(() => {
        console.log(arguments)
        fn.apply(context, arguments)
      }, delay)
    }
  }
  getData(val) {
    console.log("fetching", val)
    if (val) {
      this.sharedService.fetchData(val)
    }


  }
  log() {
    this.count++;
    console.log('Clicked!');
  }
}
