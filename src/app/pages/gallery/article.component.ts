import { AfterViewInit, Component, NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  inventoryStatus: string;
}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule, RouterLink],
})
export class ArticleComponent {
  posts = [
    {
      id: 0,
      name: 'Kurabiye',
      image: 'assets/img/detailpage/app-3.jpg',
      description: 'Renkli süslemeli ev kurabiyesi.',
    },
    {
      id: 1,
      name: 'Elmalı Turta',
      image: 'assets/img/detailpage/app-1.jpg',
      description: 'Lezzetli elmalı turta - geleneksel tarif.',
    },
    {
      id: 2,
      name: 'Börek',
      image: 'assets/img/detailpage/app-2.jpg',
      description: 'Peynirli ve ıspanaklı börek.',
    },
    {
      id: 3,
      name: 'Baklava',
      image: 'assets/img/detailpage/app-3.jpg',
      description: 'Ev yapımı baklava, fıstıklı.',
    },
    {
      id: 4,
      name: 'Kısır',
      image: 'assets/img/detailpage/app-1.jpg',
      description: 'Nar ekşili ve taze sebzeli kısır.',
    },
    {
      id: 5,
      name: 'Dolma',
      image: 'assets/img/detailpage/app-2.jpg',
      description: 'Zeytinyağlı yaprak sarma.',
    },
  ];

  groupedProducts: any[][] = [];

  ngOnInit(): void {
    this.groupProducts();
    window.addEventListener('resize', () => {
      this.groupedProducts = [];
      this.groupProducts();
    });
  }

  groupProducts() {
    const screenWidth = window.innerWidth;
    let groupSize = 3;

    if (screenWidth < 576) {
      groupSize = 1;
    } else if (screenWidth < 1024) {
      groupSize = 2;
    }

    for (let i = 0; i < this.posts.length; i += groupSize) {
      this.groupedProducts.push(this.posts.slice(i, i + groupSize));
    }
  }
}
