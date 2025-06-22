import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AppService } from 'src/app/app.service';
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
  constructor(public appService: AppService) {}
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

    for (let i = 0; i < this.appService.posts.length; i += groupSize) {
      this.groupedProducts.push(this.appService.posts.slice(i, i + groupSize));
    }
  }
}
