# rt-progress-bar
A realtime animated progress bar for Angular 7 (For angular 4 use < 0.3.6)

## Demo
[Stackblitz](https://stackblitz.com/edit/rt-progress-bar?embed=1&file=app/app.component.html)

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
    RtProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
```

At your component use it like:
```xml
<rt-progress-bar [percentage]="50" [bgColor]="'#ccc'" [fgColor]="'rgba(125, 125, 50, 0.4)'"></rt-progress-bar>
<!-- Colors can be passed in any format: #111, rgb(), rgba(), red, blue just pass it as string -->
```

## License

MIT © [Victor Carvalho](mailto:victor.blq@gmail.com)