import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadTestDelayRoutingModule } from './preload-test-delay-routing.module';
import { PreloadTestDelayComponent } from './preload-test-delay.component';


@NgModule({
  declarations: [
    PreloadTestDelayComponent
  ],
  imports: [
    CommonModule,
    PreloadTestDelayRoutingModule
  ]
})
export class PreloadTestDelayModule { }
