import { ElementRef, HostListener, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomService {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

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

  @HostListener('window:scroll', ['$event'])
  onscroll(event: Event): void {
    this.navbarlinksActive();
  }

  navbarlinksActive(): void {
    const position = window.scrollY + 200;
    const navbarlinks = this.select('#navbar .scrollto', true);
    navbarlinks.forEach((navbarlink: any) => {
      if (!navbarlink.hash) return;
      const section = this.select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }

  scrollto(el: string): void {
    const element = this.el.nativeElement.querySelector(el);
    if (element) {
      const elementPos = element.offsetTop;
      this.renderer.setProperty(window, 'scrollTo', {
        top: elementPos,
        behavior: 'smooth',
      });
    }
  }
}
