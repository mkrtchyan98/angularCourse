import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloadTestFirstRoutingModule } from './preload-test-first-routing.module';
import { PreloadTestFirstComponent } from './preload-test-first.component';


@NgModule({
  declarations: [
    PreloadTestFirstComponent
  ],
  imports: [
    CommonModule,
    PreloadTestFirstRoutingModule
  ]
})
export class PreloadTestFirstModule { }
