import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadTestDelayComponent } from './preload-test-delay.component';

const routes: Routes = [{ path: '', component: PreloadTestDelayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadTestDelayRoutingModule { }
