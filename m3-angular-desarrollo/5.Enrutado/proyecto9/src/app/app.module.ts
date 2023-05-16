import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoDetailComponent,
    PhotoGalleryComponent,
    PhotoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
