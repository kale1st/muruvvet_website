import { Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
  },
  {
    path: 'detail/:id',
    component: DetailPageComponent,
  },
];
