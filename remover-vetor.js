// Removendo vetores de uma matriz:

var indexadorDoVetor = matrizDeFrutas.indexOf("Maçã"); // Aqui é feita uma busca pelo texto "Maçã" e, se encontrando o texto, retorna o número do vetor na matriz, iniciando por 0

matrizDeFrutas.splice(indexadorDoVetor, 1); //retira o vetor, ora antes encontrado na variável 'indexadorDoVetor', sendo o número 1 a indicação da quantidade de vetores; este mesmo método também é utilizado para substituir vetores em uma matriz.

console.log(matrizDeFrutas.toString());
