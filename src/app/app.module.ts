import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search/search.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from "@angular/common/http";
import { DebouncingDirective } from './debouncing.directive';
import { BooksDisplayComponent } from './books/books-display/books-display.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LimitPipe } from './limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    SearchComponent,
    DebouncingDirective,
    BooksDisplayComponent,
    LimitPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
