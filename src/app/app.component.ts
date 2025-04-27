import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeroComponent } from './pages/hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { ArticleComponent } from './pages/gallery/article.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { RouterModule } from '@angular/router';

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
    RouterModule,
  ],
})
export class AppComponent {}
