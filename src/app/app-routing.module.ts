import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewComponent } from './pdf-view/pdf-view.component';

const routes: Routes = [
  {path:'pdf/:url', component: PdfViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
