// ? Funções imediatas (IIFE -> Immediately Invoked Function Expression)

// ? Quando a gente está definindo coisas para rodar no browser, por exemplo, normalmente não queremos que nada toque no escopo global, pois isso pode gerar problemas ...

// ? Geralmente fugimos do escopo global, criando outro escopo como uma função etc

// * Podemos criar uma função auto invocada assim: 

// IIFE
(function() {
  const nome = 'Luiz'
  console.log(nome)
})();


// ? Podemos passar parâmetros também  dessa maneira

(function(id, user, data) {
  console.log(id, user, data)
})(12, 'Eon', '...');

// ? Repare que, definimos o parâmetro na função anônima(id, user, data), e depois passamos o argumentos dentro dos outros parenteses que a a função imediata tem (12, 'Eon', '...') ...