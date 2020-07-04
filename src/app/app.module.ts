import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { DebouncingDirective } from './debouncing.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    SearchComponent,
    DebouncingDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
