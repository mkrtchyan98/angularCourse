import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTestRoutingModule } from './lazy-test-routing.module';
import { LazyTestComponent } from './lazy-test.component';


@NgModule({
  declarations: [
    LazyTestComponent
  ],
  imports: [
    CommonModule,
    LazyTestRoutingModule
  ]
})
export class LazyTestModule { }
