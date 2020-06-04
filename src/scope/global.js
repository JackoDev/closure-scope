var hello = 'Hello';
var hello = 'Hello 2'    // usando var podemos reasignar los valores de la variable, caso contrario a let y a const los cuales no permiten reasiganr en el scope global
let world = 'World';
let world = 'World 2'   // esto genera un error
const helloWorld = 'Hello World!!';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
    globalVar = 'Im global'
}

helloWorld();
console.log(globalVar);     // en este caso al ejecutar la funcion estoy creando una variable global
                            // pero hacerlo de esta forma esta considerado una mala práctica

const anotherFunction = () => {
    var localVar = globalVar = 'Yo soy global';
}

anotherFunction();          // al igual que la anterior es una mala practica y estamos asignando
console.log(globalVar);     // nuevamente una variable global al ejecutar la funcion