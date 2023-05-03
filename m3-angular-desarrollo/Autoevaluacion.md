# Autoevaluación TypeScript

¿Cuál es el propósito de un constructor en TypeScript?
1. Crear una función dentro de la clase
2. Definir un atributo de la clase 
3. Definir una interfaz 
4. Inicializar un objeto creado a partir de una clase   (√)



¿Qué es una interfaz en TypeScript?
1. Un método de una clase 
2. Una función de utilidad 
3. Un contrato que define la estructura de una entidad   (√)
4. Una clase abstracta


¿Qué modificador de acceso hace que un atributo sea accesible solo dentro de la misma clase en TypeScript?
1. public
2. private    (√)
3. protected
4. readonly


¿Cómo se implementa una interfaz en una clase de TypeScript?
1. class MyClass extends MyInterface {} 
2. class MyClass implements MyInterface {}  (√)
3. class MyClass inherits MyInterface {} 
4. class MyClass has MyInterface {}



Dada la siguiente clase:

```typescript
class Person {
    constructor(public name: string, private age: number) {}
}
```

¿Cuál de las siguientes afirmaciones es verdadera?
1. name y age son accesibles desde cualquier instancia de Person fuera de la clase 
2. Solo name es accesible desde cualquier instancia de Person fuera de la clase     (√)
3. Solo age es accesible desde cualquier instancia de Person fuera de la clase 
4. Ninguno de los atributos es accesible desde cualquier instancia de Person fuera de la clase



¿Cuál de las siguientes opciones es una forma válida de definir un atributo en una clase de TypeScript?
1. var name: string;
2. let name: string;
3. name: string;        (√)
4. const name: string;


¿Cuál de las siguientes opciones es una forma válida de llamar a un método de una instancia de una clase en TypeScript?
1. MyClass.myMethod();  (√)
2. MyClass->myMethod(); 
3. myInstance.myMethod(); 
4. myInstance::myMethod();



¿Qué sucede si no se proporciona un modificador de acceso en un atributo de una clase en TypeScript?
1. El atributo es privado 
2. El atributo es protegido 
3. El atributo es público  (√)
4. El atributo es de solo lectura



¿Cuál de las siguientes opciones es una forma válida de indicar que una clase deriva de otra en TypeScript?
1. class DerivedClass inherits BaseClass {}
2. class DerivedClass has BaseClass {}
3. class DerivedClass extends BaseClass {}   (√)
4. class DerivedClass implements BaseClass {}



Si se define una función con un parámetro opcional en TypeScript y no se proporciona un valor para ese parámetro al llamar a la función, ¿qué valor tomará el parámetro?
1. 0  
2. -1
3. undefined  (√)
4. null 

