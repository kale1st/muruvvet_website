import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ArticleComponent } from './article/article.component';
import { PartnersComponent } from './partners/partners.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ArticleComponent,
    ContactComponent,
    ServicesComponent,
    PartnersComponent,
  ],
})
export class AppComponent {}
