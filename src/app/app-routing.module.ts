import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

const routes: Routes = [
  {
   path: 'lazy-test', 
   loadChildren: () => import('./lazy-test/lazy-test.module').then(m => m.LazyTestModule)
  },
  {
   path: 'preload-test-first',
   loadChildren: () => import('./preload-test-first/preload-test-first.module').then(m => m.PreloadTestFirstModule),
   data: { preload: true }
  },
  { 
   path: 'preload-test-delay', 
   loadChildren: () => import('./preload-test-delay/preload-test-delay.module').then(m => m.PreloadTestDelayModule),
   data: { preload: true, loadAfterSeconds:5  },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: CustomPreloadingStrategyService
  }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
