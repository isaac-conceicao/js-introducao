/*let array = ['string', 1, true,['array1'],['array2'],['array3'],['array4']];
console.log(array[4]);

//forEach(): executa uma função para cada item/indice
array.forEach(function(index, item){console.log(index, item)});

//push(): add novo item ao final do array
array.push('novo_item');
console.log(array);

//pop(): remove último item do array
array.pop();
console.log(array);

//shift(): remove item do inicio
array.shift();
console.log(array);

//unshift(): add item no inicio
array.unshift('unshifted')
console.log(array);

//indexOf(): retorna o indice do item
console.log(array.indexOf(true));

//splice(): deleta um range de items
array.splice(0,3);
console.log(array);

//slice(): retorna um range do array
let novoArray = array.splice(0,2);
console.log(novoArray);*/

//OBJETOS 
function getEstado(objeto){
    if (objeto.conteudo.volume <= 0) {
        objeto.conteudo.volume=0;
        return 'vazia';
    }
    if (objeto.conteudo.volume >= objeto.maxVolume){
        objeto.conteudo.volume=objeto.maxVolume;
        return 'cheia';
    }
    return 'em uso';
}

var xicara = {
    cor: 'azul',
    tamanho: 'm',
    maxVolume: 100,
    estado: '',
    conteudo: {
        volume: 120,
        tipoConteudo: 'cafe'
    }
}

xicara.estado = getEstado(xicara);
console.log(xicara);

var {cor, maxVolume, estado} = xicara;
console.log(estado);


