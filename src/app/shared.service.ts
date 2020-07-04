import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  fetchData(val) {
    console.log({ val })
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${val}`)

  }
}
