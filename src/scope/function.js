// BLOCK SCOPE

let x = 1;

{
    let x = 2;
    console.log('console dentro del bloque');
    console.log(x);
}

console.log('console fuera del bloque');
console.log(x);

const anotherFunction = () => {
    for (var i = 0; i < 10; i++){       // la asignacion con var imprime 10 veces el numero 10, caso contrario a usar let el cual imprime los valores ascendientes del 0 al 9
        setTimeout(()=>{
            console.log(i);
        }, 1000)
    }
}
anotherFunction();