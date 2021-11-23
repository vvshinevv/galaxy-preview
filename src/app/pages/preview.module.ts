import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './preview/layout/layout.component';
import { MainComponent } from './preview/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './preview/services/services.component';
import { PortfolioComponent } from './preview/portfolio/portfolio.component';
import { TestimonialComponent } from './preview/testimonial/testimonial.component';
import { ContactComponent } from './preview/contact/contact.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "**",
        component: MainComponent
      }
    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, MainComponent, ServicesComponent, PortfolioComponent, TestimonialComponent, ContactComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PreviewModule { }
