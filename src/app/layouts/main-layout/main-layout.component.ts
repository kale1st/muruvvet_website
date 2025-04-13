import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleComponent } from 'src/app/article/article.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { HeroComponent } from 'src/app/hero/hero.component';
import { PartnersComponent } from 'src/app/partners/partners.component';
import { ServicesComponent } from 'src/app/services/services.component';

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
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css',
})
export class MainLayoutComponent {}
