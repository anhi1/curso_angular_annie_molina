import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import {HttpClientModule} from '@angular/common/http';
import {NgFor} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    PhotoDetailComponent,
    PhotoFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
