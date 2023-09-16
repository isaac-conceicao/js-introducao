// estruturas condicionais

// estruturas de decisão

// if

/*var jogador1 = 2;
var jogador2 = 0;
var placar;
// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : console.log('os jogadores não são válidos')

//if aninhado
if (jogador1 > 0) {
    console.log('o jogador 1 marcou ponto');
    if (jogador1>jogador2)
        placar=jogador1>jogador2;
} 
if (jogador2 > 0) {
    console.log('o jogador 2 marcou ponto');
    if (jogador1<jogador2)
        placar=jogador1<jogador2;
}//usando else 
else {
    console.log('ninguem marcou ponto');
}

// usando switch case
 switch (placar) {
    case jogador1>jogador2:
        console.log('jogador 1 ganhou');
        break;
    case jogador1<jogador2:
        console.log('jogador 2 ganhou');
        break;
    default:
        console.log('empate')
}*/


// estruturas de repetição
 let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5']
 let object = { propriedade1: '12', propriedade2: 'valor2', propriedade3: 'valor3'}

 // for - executa até que seja false
/*for (let i = 0; i < array.length; i++) {
    console.log(i,array[i]);
}*/


// for/in - executa repetição extraindo uma propriedade/indice
// com array
/*for (i in array) {
    console.log(i);
}

// com object
for (i in object) {
    console.log(i);
}*/

// for/of - executa repetição extraindo um valor
// com array
/* for (i of array) {
    console.log(i);
}

// com object não funciona pois não é iterável (não possui índice numérico)
for (i of object.propriedade1) {
    console.log(i);
} */


// while - executa enquanto for verdadeira
var a = 0;
/* while (a < 10) {
    a++;
    console.log(a)
} */

// do+while- executa até que seja falsa
do {
    a++;
    console.log(a);
} while (a < 10);