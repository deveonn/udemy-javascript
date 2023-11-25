// try, catch, finally

try  {
// é executada quando não há erros
} catch(erro) {
// é usada quando há erros
} finally {
// sempre é executado!
}

function retornaHora(data) {
    // ! Util pra fazer validações!!!
    // se a data for enviada e não for uma instancia de date ...
    if(data && !(data instanceof Date)){
        throw new TypeError("Esperando instância de Date.")
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit',
        hour12: false,
    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
} catch(erro) {
    // Tratar erro ...
    console.log(erro)
} finally {
    console.log("Tenha um bom dia!")
}



// * instanceof : O operador instanceof em JavaScript é usado para verificar o tipo de um objeto em tempo de execução. Ele retorna um valor booleano se verdadeiro, então indica que o objeto é uma instância de uma classe particular e se falso, então não é.