# rt-progress-bar

## Installation

To install this library, run:

```bash
$ npm install rt-progress-bar --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```xml
<h1>
  {{title}}
</h1>
<progress-bar [percentage]="50"></progress-bar>
```

## License

MIT © [Victor Carvalho](mailto:victor.blq@gmail.com)
