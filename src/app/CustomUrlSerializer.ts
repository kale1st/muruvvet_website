import { DefaultUrlSerializer, UrlTree } from '@angular/router';

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
