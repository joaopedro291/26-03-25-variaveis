var  nomeDaVariavel = "Valor da Variavel";

let nomeDaVariavelTemporaria = "Valor Temporario da Variavel"; //declara uma variavel temporaria (que so fica ate o final do script, nao fica salva) 

const nomeDaVariavelSomenteLeitura = "Valor Somente Leitura da Variavel";

console.log("nomeDaVariavel:", nomeDaVariavel);

console.log("nomeDaVariavelTemporaria:", nomeDaVariavelTemporaria);

console.log("nomeDaVariavelSomenteLeitura:",
nomeDaVariavelSomenteLeitura);

var matriz = ["vetor 1", "vetor 2", "vetor 3", "vetor 4", "vetor 5"];

//console.log("matriz, vetor1:", matriz[0]);

for (let i = 0; i < matriz.length; i++) {
    console.log("matriz[" + i + "]:", matriz [i]);
}

class NomeDoObjeto {
    constructor (parametroUm, parametroDois) {
        //this.parametroUm = "Valor Um";
        //this.parametroDois = "Valor Dois";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;

    }

    metodoMostrarParametros(parametroUm, parametroDois) {
        //declaração de método que vai mostrar os parâmetros, NÃO AS PROPRIEDADES
        //this.parametroUm = "Valor 1";
        //this.parametroDois = "Valor 2";
        this.parametroUm = parametroUm;
        this.parametroDois = parametroDois;
        return this.parametroUm + " - " //return faz o método retornar o valor declarado após o return
    }
}


 class teclado {
    constructor (teclas, letras, cor, formato, material, tamanho, layout, iluminacao, conectividade, touchpad, marca) {
        this.teclas = teclas;
        this.letras = letras;
        this.cor = cor;
        this.formato = formato;
        this.material = material;
        this.tamanho = tamanho;
        this.layout = layout;
        this.iluminacao = iluminacao;
        this.conectividade = conectividade;
        this.touchpad = touchpad;
        this.marca = marca;
    }

    mostrarParametros(teclas, letras, cor, formato, material, tamanho, layout, iluminacao, conectividade, touchpad, marca) {
        this.teclas = teclas;
        this.letras = letras;
        this.cor = cor;
        this.formato = formato;
        this.material = material;
        this.tamanho = tamanho;
        this.layout = layout;
        this.iluminacao = iluminacao;
        this.conectividade = conectividade;
        this.touchpad = touchpad;
        this.marca = marca;
        return this.teclas 
        + " - " 
        + this.letras 
        + " - " 
        + this.cor 
        + " - " 
        + this.formato 
        + " - " 
        + this.material 
        + " - " 
        + this.tamanho 
        + " - " 
        + this.layout 
        + " - " 
        + this.iluminacao 
        + " - " 
        + this.conectividade 
        + " - " 
        + this.touchpad 
        + " - " 
        + marca;
    }
 }

const Teclado = new teclado();
console.log("Teclado: " + Teclado.mostrarParametros("teclas", "letras", "cor", "formato", "material", "tamanho", "layout", "iluminacao", "conectividade", "touchpad", "marca"));