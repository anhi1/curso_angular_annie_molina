import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [

    {
      path: 'photo-gallery',
      component: PhotoGalleryComponent
    },
    {
      path: 'photo-detail/:id',
      component: PhotoDetailComponent
    },
    {
      path: 'photo-form',
      component: PhotoFormComponent
    },
    {
      path: '', redirectTo:'/photo-gallery', pathMatch:'full' //indica la posicion absoluta '/ pra que tome desde el principio

    },
    {
      path: '**', redirectTo:'/photo-gallery', pathMatch:'full'

    }

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
