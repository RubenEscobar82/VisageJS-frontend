import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css'
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/javascript-lint';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
