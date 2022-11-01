import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookReviewLibModule } from 'book-review-lib';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BookReviewLibModule,
  ]
})
export class HomeModule { }
