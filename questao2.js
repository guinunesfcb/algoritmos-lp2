/*
Questão 2 - Faça um algoritmo que peça para o usuário informar os valores de um array multidimensional 3x3.

Exiba o array para o usuário, e após isso, peça para o usuário informar um número de 1 a 3.

Dependendo da opção que o usuário escolher acontecerá o seguinte:

1 - vai retornar o somatório de todos os elementos da linha 1.

2 - vai retornar a multiplicação da diagonal da matriz.

3 - vai retornar a quantidade total de números pares presente na matriz inteira

4 - encerrar o programa
*/

import readlineSync from 'readline-sync';

const matriz = [
    ["?", "?", "?"],
    ["?", "?", "?"],
    ["?", "?", "?"]
];

console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        let posicao = readlineSync.questionInt(`Digite um numero para inserir na linha [${i}] na posicao[${j}]: `);
        if (posicao <= 3) {
            matriz[i][j] = posicao;
        } else {
            console.log("Número inválido, insira um número menor que 4");
            j--
        }
    }
}

console.table(matriz)

console.log("=== MENU ===");
console.log("1 - SOMAR TODOS OS ELEMENTOS DA LINHA 1 DO matriz");
console.log("2 - MULTIPLICAÇÃO DIAGONAL DA MATRIZ")
console.log("3 - RETORNAR QUANTIDADE TOTAL DE NÚMEROS PARES DENTRO DA MATRIZ")
console.log("4 - ENCERRAR PROGRAMA")

const escolha = readlineSync.questionInt('Escolha uma opcao: ');

switch (escolha) {
    case 1:
        let soma = 0;
        for (let i = 0; i < matriz[1].length; i++) {
            soma += matriz[1][i];
        }
        console.log(`A soma dos elementos da linha 1 é: ${soma}`);
        break;

    case 2:
        let multiplicacao = matriz[2][0] * matriz[1][1] * matriz[0][2];
        console.log(`A multiplicação dos elementos da diagonal é: ${multiplicacao}`);
        break;

    case 3:
        let quantidadePares = 0;
        for (let i = 0; i < matriz.length; i++) {
            for (let j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] % 2 === 0) {
                    quantidadePares++;
                }
            }
        }
        console.log(`A quantidade total de números pares na matriz é: ${quantidadePares}`);
        break;

    case 4:
        console.log("Programa encerrado.");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 4.");
        break;
}
