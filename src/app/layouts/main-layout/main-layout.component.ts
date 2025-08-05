import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from 'src/app/pages/gallery/article.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { HeroComponent } from 'src/app/pages/hero/hero.component';
import { PartnersComponent } from 'src/app/pages/partners/partners.component';
import { ServicesComponent } from 'src/app/services/services.component';
import { FooterComponent } from 'src/app/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ArticleComponent,
    ContactComponent,
    ServicesComponent,
    PartnersComponent,
    RouterModule,
    FooterComponent,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
