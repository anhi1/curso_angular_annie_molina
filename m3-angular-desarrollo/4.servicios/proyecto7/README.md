# Angular servicios con HttpResponse


1. ng new proyecto7
2. ng generate module users
3. ng generate component users/user-list
4. ng generate service users/user
5. ng generate interface users/user --type=model --prefix=I
6. importar HttpClientModule en imports de app.module.ts
7. Inyectar HttpClient en constructor user.service.ts
8. Crear método findAll en user.service.ts