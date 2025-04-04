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
        name: 'Time To Help',
        desc: 'Eine humanitäre Hilfsorganisation, die weltweit bedürftige Menschen mit Bildungs-, Gesundheits- und Sozialprojekten unterstützt.',
        url: 'https://timetohelp.eu/',
        img: './../assets/img/time_to_help.webp',
      },
      {
        name: 'Forum Dialog Niedersachsen e.V.',
        desc: 'Ein Verein, der interkulturellen und interreligiösen Dialog fördert und den gesellschaftlichen Zusammenhalt stärkt.',
        url: 'https://forumdialogniedersachsen.org/',
        img: '../../assets/img/Logo_forum_dialog_ndr.png',
      },
      {
        name: 'Haus of One – Projekt in Berlin',
        desc: 'Ein einzigartiges interreligiöses Bauprojekt, das eine Synagoge, eine Kirche und eine Moschee unter einem Dach vereint und den Austausch zwischen Religionen fördert.',
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
