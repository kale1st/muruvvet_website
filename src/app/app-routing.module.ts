import { NgModule } from '@angular/core';
import {
  DefaultUrlSerializer,
  RouterModule,
  Routes,
  UrlTree,
} from '@angular/router';
export class CustomUrlSerializer extends DefaultUrlSerializer {
  override parse(url: string): UrlTree {
    try {
      return super.parse(url);
    } catch (error) {
      console.warn('Hatalı URL yakalandı:', url);
      return super.parse('/');
    }
  }
}
const routes: Routes = [
  // Senin route'ların buraya gelecek
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      canceledNavigationResolution: 'computed',
      paramsInheritanceStrategy: 'always',
      urlUpdateStrategy: 'eager',
    }),
  ],
  providers: [{ provide: DefaultUrlSerializer, useClass: CustomUrlSerializer }], // Yeni özel URL yönetimi
  exports: [RouterModule],
})
export class AppRoutingModule {}
