// Verificando tipos de variáveis

let valor = "Hello";
console.log(typeof valor); //string

valor = 10
console.log(typeof valor); //number

valor = parseFloat(10.12); 
console.log(typeof valor); // float number

valor = valor != 0; //true
//console.log(valor != 0 ? "ok" : "nok"); // ok
console.log(typeof valor); //booleean

valor = BigInt("972397421942017241080988924142190217194092198");
console.log(typeof valor); //bigInt

let varUndefinied;
console.log(typeof varUndefinied); // undefinied null value

class Objeto {
    constructor (paramOne, paramTwo) {
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
        console.log(typeof this.paramTwo); //undefinied
    }
}

const objeto = new Objeto("Só parametro 1");
console.log(typeof objeto); // object class

valor = document.getElementById("elementoInexistente"); // valor = null;
console.log(typeof valor); // undefinied null

valor =  ["vetor1", "vetor2"];
console.log(typeof valor); // array object

const date = new Date("2025-03-28"); 
console.log(typeof date); // date object

console.log(date); //mostrar tudo sobre a variável/objeto
