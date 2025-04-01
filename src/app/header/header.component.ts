import {
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ScrollDirective } from '../scroll.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ScrollDirective],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('body') body!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;

  isActive: boolean = false; // Varsayılan olarak kapalı

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    // Navbar içindeki tüm linkleri al
    const navLinks = this.navbar.nativeElement.querySelectorAll('a');

    navLinks.forEach((link: any) => {
      link.addEventListener('click', () => {
        this.setActiveLink(link);
      });
    });
  }

  toggleMobileNav(): void {
    if (this.isActive) {
      this.renderer.removeClass(this.header.nativeElement, 'bi-x');
      this.renderer.addClass(this.header.nativeElement, 'bi-list');
      this.renderer.removeClass(this.body.nativeElement, 'mobile-nav-active');
    } else {
      this.renderer.removeClass(this.header.nativeElement, 'bi-list');
      this.renderer.addClass(this.header.nativeElement, 'bi-x');
      this.renderer.addClass(this.body.nativeElement, 'mobile-nav-active');
    }

    this.isActive = !this.isActive;
  }

  setActiveLink(activeLink: any) {
    const navLinks = this.navbar.nativeElement.querySelectorAll('a');

    navLinks.forEach((link: any) => {
      this.renderer.removeClass(link, 'active');
    });

    this.renderer.addClass(activeLink, 'active');

    // Menü kapanmalı
    this.toggleMobileNav();
  }
}
