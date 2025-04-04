import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
interface slider {
  name: string;
  desc: string;
  url: string;
  img: string;
}
@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css',
})
export class PartnersComponent {
  @ViewChild('testimonialsSwiper', { static: false }) swiperRef!: ElementRef;

  private swiperInstance!: Swiper;
  sliders: slider[] = [];

  ngOnInit(): void {
    this.sliders = [
      {
        name: 'Time to Help',
        desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
        url: 'https://timetohelp.eu/',
        img: './../assets/img/time_to_help.webp',
      },
      {
        name: 'Forum Dialog',
        desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
        url: 'https://www.forumdialog.org/',
        img: '../../assets/img/forumdialog-logo.png',
      },
      {
        name: 'House Of One',
        desc: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.',
        url: 'https://www.forumdialog.org/projekt/house-of-one/',
        img: '../../assets/img/house-of-one.jpg',
      },
    ];
  }

  ngAfterViewInit() {
    this.swiperInstance = new Swiper(this.swiperRef.nativeElement, {
      modules: [Autoplay, Pagination],
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }

  ngOnDestroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy();
    }
  }
}
