class SmartPhone{
    constructor(model, core, ram, isAndroid){
        this.model = model;
        this.core = core;
        this.ram = ram;
        this.isAndroid = isAndroid;
    }
}

//this es asociar al objeto
// Ctrl + Shift + Space dentro de los paréntesis del constructor permite ver los argumentos que necesita
const phone1 = new SmartPhone("One Plus 11", 4, 12, true);
const phone2 = new SmartPhone("xiami redmi 13", 6, 16, true);
const phone3 = new SmartPhone();
console.log(phone1);