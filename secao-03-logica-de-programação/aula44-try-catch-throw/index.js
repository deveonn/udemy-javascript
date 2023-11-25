// ? Podemos criar respostas caso erros aconteçam na nossa aplicação:
// * OBS, nunca mostre erros para o usuário.

// * Caso nosso código acabe usando variaveis que podem não existir:

// try {
//     console.log(naoExisto);
// } catch(erro) {
//     console.log("Variável não declarada.");
//     console.log(erro);
// }

// ? Podemos usar throw para lançar nossos próprios erro:
// * Usamos throw para LANÇAR o erro, e try para  TENTAR executar se estiver certo;
// * Mas se estiver errada, aí o catch que vai PEGAR esse erro e tratar ...

function sum(x, y) {
  if (typeof x !== "number" || typeof y !== "number") throw ("Valores invalidos ...");
  return x + y;
}

try {
    console.log(sum(12, 2));
    console.log(sum('12', 2));
} catch(erro) {
    console.log(erro);
}
