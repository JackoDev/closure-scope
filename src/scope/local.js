const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
}

helloWorld();
console.log(hello);     // genera error ya que no es posible acceder a una variable definida dentro de una funcion o con scope LOCAL


var scope = 'i am global';                      /// desde aqui

const functionScope = () => {
    var scope = ' i am just local';                     // a esto s e le conoce como ámbito léxico
    const func = () => {                                // el output de esta sección de código imprime e valor de scope ' i am just a local'
        return scope
    }
    console.log(func());
}

functionScope();                                // hasta aqui