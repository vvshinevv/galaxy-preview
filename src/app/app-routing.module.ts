import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewModule } from './pages/preview.module';

const routes: Routes = [];

@NgModule({
  imports: [PreviewModule, RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
