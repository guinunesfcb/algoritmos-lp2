/*Faça um algoritmo de compra de ticket de cinema, o cinema tem 4 linhas e 4 fileiras de cadeiras para serem escolhidas.

O algoritmo não deverá ser finalizado nunca. Ele exibirá ao usuário o layout das cadeiras do cinema semelhante ao que está abaixo, mostrando cadeiras livres e preenchidas, pedirá para o usuário informar a posição da cadeira desejada, exibirá uma informação confirmando a compra. Logo em seguida, limpará a tela, e continuará o processo de compra de ingresso para um novo usuário
*/

import readlineSync from 'readline-sync';

const fileira = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]

function escolherAssento() {
    console.log("===TELA DO CINEMA===");
    console.log("Assentos disponíveis:");
    console.table(fileira);
    console.log("Escolha um assento entre 1 e 16");
    const assento = readlineSync.questionInt('Escolha um assento: ');
    for (let i = 0; i < fileira.length; i++) {
        for (let j = 0; j < fileira[i].length; j++) {
            if (fileira[i][j] === assento) {
                fileira[i][j] = '#';
                console.log("Assento reservado com sucesso!");
                console.table(fileira);
            }
        }

    }
}

while (true) {
    escolherAssento()
}