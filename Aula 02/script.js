//tipos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = 'Isaac'
console.log(typeof(nome));

//undefined
var indefinida;
console.log(typeof(indefinida));

//const
const constante = 'valor_inicial';
console.log(typeof(constante));
//constante = 'valor_secundario';

//escopo
var escopoGlobal = 'global';
function funcaoLocal(){
    let escoloLocal = 'local';
    console.log(escoloLocal);
}
console.log(escopoGlobal);
//console.log(escoloLocal);
funcaoLocal();

//atribuicao
var atribuicao = 'diana';

//comparacao
var comparacao = '0' == 0;
console.log(comparacao);

//comparacao identica
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//add
var adicao = 1+1;
console.log(adicao);

//sub
var subtracao = 2-1;
console.log(subtracao);

//mult
var multiplicacao = 2*3;
console.log(multiplicacao);

//div
var divisao = 3/2;
console.log(divisao);

//mod
var modulo = 11%7;
console.log(modulo);

//pot
var potencia = 2**10;
console.log(potencia);