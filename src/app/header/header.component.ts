import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('header') header: ElementRef | any;
  @ViewChild('body') body: ElementRef | any;

  isActive: boolean = true; //side menu active?

  constructor(private renderer: Renderer2) {}

  toggleMobileNav(): void {
    if (this.isActive) {
      this.renderer.removeClass(this.header.nativeElement, 'bi-list');
      this.renderer.addClass(this.header.nativeElement, 'bi-x');
      this.renderer.addClass(this.body.nativeElement, 'mobile-nav-active');
      this.isActive = false;
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'bi-x');
      this.renderer.addClass(this.header.nativeElement, 'bi-list');
      this.renderer.removeClass(this.body.nativeElement, 'mobile-nav-active');
      this.isActive = true;
    }
  }
}
