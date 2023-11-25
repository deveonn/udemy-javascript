// ? O FOR IN, pega os indices, o FOR OF pega os valores de cada indice!!!

const nome = "Émerson";
const nomes = ["Émerson", "Luiza", "Henrique", "Manuel", "Maria "];

// primeiro vimos:
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.log("----------------------------------------------------------------");
// depois vimos:
// ? CURIOSIDADE: o FOR IN pode percorrer um string, pois ela é ITERAVEL(tem indices que podem ser percorridos)!

for (let i in nome) {
  //string
  console.log(nome[i]);
}

// * Mas e se quisessemos pegar apenas um valor especifico dentro uma iteração de objeto ou array?
// TODO pra isso usamos FOR OF:

for (let valor of nomes) {
  console.log(valor);
}


// ? Usando método de array forEach, simplificamos mais ainda nossa vida em situações como essa:
// * Ela retorna para os paramentros da função, as seguintes informações nessa exata ordem!

// TODO primeira variavel, o valor(string, number, boolean, etc);
// TODO segundo segunda variavel, o indice de cada valor;
// TODO terceiro, o array inteiro.

// * Exemplo:
nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})

// ! Trabalhando com objetos:
// * O FOR OF já não funciona para iterar objetos, pois retorna apenas o valor em si, então usamos apenas para iteraveis(arrays ou strings), funciona apenas com iteraveis.
// * O FOR CLASSICO geralmente será só usados com iteraveis também(array ou strings);
// * O FOR IN retorna o indice ou a chave (string, array, ou objetos);

const pessoa = {
    nome: 'Émerson',
    sobrenome: 'Vargas',
    idade: 23
}

for(let i in pessoa) {
    console.log(pessoa[i])
}