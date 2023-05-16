import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

//Opcion 1
const routes: Routes = [
  {
    path:'', //path es la ruta o camino / Página de incio / localhost:4200
    component: PhotoGalleryComponent
  },
  {
    path:'photo-detail',
    component: PhotoDetailComponent
  },
  {
    path:'photo-form',
    component: PhotoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
