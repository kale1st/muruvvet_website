import { Component, OnInit } from '@angular/core';

declare const Typed: any; // Declare Typed to avoid TypeScript error

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  standalone: true,
})
export class HeroComponent implements OnInit {
  typedItems: string[] = ['Die offene Tür.'];

  ngOnInit(): void {
    // Hero type effect initialization
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      new Typed('.typed', {
        strings: this.typedItems,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }
}
