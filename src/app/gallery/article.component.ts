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
  constructor() {}

  products = [
    {
      id: '1000',
      name: 'Bamboo Watch',
      image: 'bamboo-watch.jpg',
      price: 65,
      inventoryStatus: 'INSTOCK', // "LOWSTOCK" veya "OUTOFSTOCK" olabilir
    },
    {
      id: '1001',
      name: 'Black Watch',
      image: 'black-watch.jpg',
      price: 72,
      inventoryStatus: 'LOWSTOCK',
    },
    {
      id: '1002',
      name: 'Blue Band',
      image: 'blue-band.jpg',
      price: 79,
      inventoryStatus: 'INSTOCK',
    },
    {
      id: '1003',
      name: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 29,
      inventoryStatus: 'INSTOCK',
    },
    {
      id: '1004',
      name: 'Bracelet',
      image: 'bracelet.jpg',
      price: 15,
      inventoryStatus: 'OUTOFSTOCK',
    },
    {
      id: '1005',
      name: 'Brown Purse',
      image: 'brown-purse.jpg',
      price: 120,
      inventoryStatus: 'LOWSTOCK',
    },
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
