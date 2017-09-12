import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RtProgressBarComponent } from './rt-progress-bar.component';

export * from './rt-progress-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RtProgressBarComponent,
  ],
  exports: [
    RtProgressBarComponent,
  ]
})
export class RtProgressBarModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RtProgressBarModule,
    };
  }
}
