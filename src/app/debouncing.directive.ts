import { Directive, EventEmitter, HostListener, OnInit, Output, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebouncing]'
})
export class DebouncingDirective implements OnInit {
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription: Subscription;
  @Input() debounceTime = 500;

  constructor() { }

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => this.debounceClick.emit(e));
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('keyup', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
