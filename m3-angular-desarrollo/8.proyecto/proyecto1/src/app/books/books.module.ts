import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookGalleryComponent } from './book-gallery/book-gallery.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from "../shared/shared.module";
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@NgModule({
    declarations: [
        BookListComponent,
        BookGalleryComponent,
        BookDetailComponent,
        BookFormComponent
    ],
    imports: [
        CommonModule,
        BooksRoutingModule,
        HttpClientModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        SharedModule,
        MatGridListModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatInputModule

    ]
})
export class BooksModule { }
