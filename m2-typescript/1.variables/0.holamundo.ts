
/*
REQUISITOS:
Windows Powershell como Administrador:
get-ExecutionPolicy -list 
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


OPCIÓN 1:

npm install -g typescript
tsc --version
npm install -g ts-node

Abrir Preferences User Settings (JSON)

"code-runner.executorMap": {
    "typescript": "ts-node"
}


OPCIÓN 2: si ts-node sale como comando no reconocido

En visual Studio code por la terminal:

npm install -g typescript
npm install --save-dev ts-node

crear .gitignore y añadir dentro: node_modules

Abrir Preferences User Settings (JSON)

"code-runner.executorMap": {
    "typescript": "./node_modules/.bin/ts-node"
}



POWERSHELL
Get-ExecutionPolicy
Restricted
Set-ExecutionPolicy Unrestricted
S
Get-ExecutionPolicy
Unrestircted
EXIT
en visual comprobar y escrivbir es opcional: ng serve
*/




console.log("Hola Annie");

enum Color {
    Red,
    Green,
    Blue
  }
  let favoriteColor: Color = Color.Red;
  console.log(favoriteColor);
  
let person: object = {
    name: 'Jhon Doe',
    age:30
}

let unknownType: any = 'Some value';

console.log(unknownType);




