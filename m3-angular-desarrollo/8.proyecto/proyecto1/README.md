# Angular: biblioteca de libros

npm install -g json-server

ng new proyecto1 --routing --skip-git --style=css

ng add @angular/material -y --theme=indigo-pink --typography=y

Crear archivo db.json e introducir datos demo que podemos crear con https://mockaroo.com/

json-server --watch db.json

## Modelos:

* book
* author
* editorial
* biblioteca
* reserva


## Comandos

ng generate component layout/navbar
ng generate component layout/footer

ng generate module books --routing --module app.module
ng generate component books/book-list
ng generate component books/book-gallery
ng generate component books/book-detail
ng generate component books/book-form
ng generate interface books/models/book --type=model --prefix=I
ng generate service books/services/book


module shared: quiere decir que 
las cosas que esten en el  module 
shared pueden ser utilizadas en otros modulos
