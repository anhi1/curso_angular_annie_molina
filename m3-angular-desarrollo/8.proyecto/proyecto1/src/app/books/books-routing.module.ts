import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: '',  // La ruta vacía , (una cadena vacía), significa que esa ruta coincide con la URL raíz del sitio o la URL base de la aplicación.
    component: BookListComponent
  },
  {
    path: 'gallery',
    component: BookGalleryComponent
  },
  {
    path: 'new',
    component: BookFormComponent
  },
  {
    path: ':id',
    component: BookDetailComponent
  },
  {
    path: ':id/edit',
    component: BookFormComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
