import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor() { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  select(el: string, all: boolean = false): any {
    el = el.trim();
    if (all) {
      return Array.from(document.querySelectorAll(el));
    } else {
      return document.querySelector(el);
    }
  }

  on(type: string, el: string, listener: EventListenerOrEventListenerObject, all: boolean = false): void {
    const selectEl = this.select(el, all);
    if (selectEl) {
      if (all) {
        Array.from(selectEl).forEach((e: any) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  }
}
