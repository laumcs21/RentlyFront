import 'zone.js';  // <-- agrega esta línea primero
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import '@angular/compiler';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
