import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, UrlSerializer } from '@angular/router';
import { routes } from './app/app-routing.module';
import { CustomUrlSerializer } from './app/CustomUrlSerializer';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    { provide: UrlSerializer, useClass: CustomUrlSerializer },
  ],
}).catch((err) => console.error(err));
