
/*
npm init -y

npm install -g typescript
tsc --version
npm install -g ts-node

Abrir prefrences User Settings (Json)
"code-runner.executorMap": {
  "typescript": "ts-node"
}

Windows Powershell como administrador
get-ExecutionPolicy -list
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser

OPCION2
npm install -g typescript
npm install --save-dev ts-node

crear .gitignore y añadir dentro: node_modules
abrir Preferences User Settings (JSON)

"code-runner.executorMap": {
  "typescript": "./node_modules/.bin/ts-node"

}


*/

console.log("hola mundo");
