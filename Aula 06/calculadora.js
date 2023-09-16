function menu(){
    console.log('run menu()')
    const operacao = prompt('Escolha uma operacao:\n1 - Soma(+)\n2 - Subtração (-)\n3 - Multiplicacao (*)\n4 - Divisao (/)\n5 - Resto (%)\n6 - Potência (**)\n 0 - Sair')
    return operacao;
}

function soma(){
    console.log('run soma()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} + ${n2} = ${n1+n2}`)
    return n1+n2
}

function subtracao(){
    console.log('run subtracao()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} - ${n2} = ${n1-n2}`)
    return n1-n2
}

function multiplicacao(){
    console.log('run multiplicacao()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} * ${n2} = ${n1*n2}`)
    return n1*n2
}

function divisao(){
    console.log('run divisao()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} / ${n2} = ${n1/n2}`)
    return n1/n2
}

function resto(){
    console.log('run resto()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} % ${n2} = ${n1%n2}`)
    return n1%n2
}

function potencia(){
    console.log('run potencia()')
    let n1=Number(prompt('Primeiro valor:'))
    let n2=Number(prompt('Segundo valor:'))
    alert(`${n1} ** ${n2} = ${n1**n2}`)
    return n1**n2
}

function principal (){
    console.log('run principal()')
    let opcao='-1';
    let resultado;

    while(opcao!='0'){
        opcao=menu()
        switch (opcao) {
            case '1':
                resultado=soma(n1,n2)
                break;
            case '2':
                resultado=subtracao(n1,n2)
                break;
            case '3':
                resultado=multiplicacao(n1,n2)
                break;
            case '4':
                resultado=divisao(n1,n2)
                break;
            case '5':
                resultado=resto(n1,n2)
                break;
            case '6':
                resultado=potencia(n1,n2)
                break;
            case '0':
                console.log('saindo')
                break;
            default:
                console.log('Erro: opcao invalida')
                break;
        }
    }
}

principal();