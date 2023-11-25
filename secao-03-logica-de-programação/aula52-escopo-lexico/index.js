// ! Escopo Léxico

// ? Repare que temos duas variáveis const neste código, com o mesmo nome
// ? na função fala nome, temos o console.log no nome
// ? no escopo da falaNome(), se não tiver uma variável nome, ela pega do escopo antecessor para usar(faça o teste para entender)

// * Ou seja, se não tive a variável naquele escopo, a função
// * Pega do escopo anterior a ela !

// ? Na função usaFalaNome(), mesmo quando do declaramos a variável nome, ela não é usada pela função falaNome()
// ? Pois funções sempre lembram onde foram declaradas, e então, usam variáveis dos seus vizinhos, em vez de variáveis do mesmo escopo onde a função é chamada! 

const nome = "John"

function falaNome() {
  // const nome = "Otávio" 
  console.log(nome)
}

function usaFalaNome() {
  // const nome = "Otávio" 
  falaNome()
}

usaFalaNome()