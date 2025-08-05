import { Routes } from '@angular/router';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
];
