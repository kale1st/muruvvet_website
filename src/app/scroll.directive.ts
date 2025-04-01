import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appScroll]',
  standalone: true,
})
export class ScrollDirective implements OnInit {
  private navbarLinks!: NodeListOf<Element>;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.navbarLinks = document.querySelectorAll('#navbar .scrollto');
    this.navbarLinksActive();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.navbarLinksActive();
  }

  private navbarLinksActive() {
    let position = window.scrollY + 200;
    this.navbarLinks.forEach((navbarlink: Element | any) => {
      if (!navbarlink.hash) return;
      let section = document.querySelector(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }
}
