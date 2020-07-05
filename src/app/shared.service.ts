import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiData: any = new Subject<any>();

  constructor(private http: HttpClient) { }
  fetchData(val): any {
    console.log({ val })
    this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}`).subscribe((response: any) => {
      if (response) {
        console.log({ response })
        this.setData(response)
        // bindEvents(JSON.stringify(json))
        // carddeck.style.display = "block"
        // books.innerHtml = 'hey' //JSON.stringify(json)
      }
    }, (err) => {
      alert("HTTP-Error: " + err);
      console.log({ err })
    })
  }
  setData(data) {
    this.apiData.next(data)
  }
}
