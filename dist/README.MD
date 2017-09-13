# rt-progress-bar
A realtime animated progress bar for Angular 4+

## Installation

To install this library, run:

```bash
$ npm install rt-progress-bar --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';

import { RtProgressBar } from 'rt-progress-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RtProgressBarModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
```

```xml
<h1>
  {{title}}
</h1>
<rt-progress-bar [percentage]="50" [bgColor]="'#ccc'" [fgColor]="'rgba(125, 125, 50, 0.4)'"></rt-progress-bar>
```

## License

MIT © [Victor Carvalho](mailto:victor.blq@gmail.com)
