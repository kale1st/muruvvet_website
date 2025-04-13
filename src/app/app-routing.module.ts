import { Routes } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'detail', pathMatch: 'full' },
  { path: 'detail', component: DetailPageComponent },
];
