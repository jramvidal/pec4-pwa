import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding, withHashLocation } from '@angular/router'; // <--- OJO AQUÍ
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServiceWorker } from '@angular/service-worker';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Aquí es donde activamos la almohadilla (#)
    provideRouter(routes, withComponentInputBinding(), withHashLocation()), 
    
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideServiceWorker('ngsw-worker.js', {
        enabled: true,
        registrationStrategy: 'registerWhenStable:30000'
    })
  ]
};

// Necesario para el import de provideZoneChangeDetection que se me pasó arriba
import { provideZoneChangeDetection } from '@angular/core';