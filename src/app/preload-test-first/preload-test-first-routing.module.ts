import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadTestFirstComponent } from './preload-test-first.component';

const routes: Routes = [{ path: '', component: PreloadTestFirstComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloadTestFirstRoutingModule { }
