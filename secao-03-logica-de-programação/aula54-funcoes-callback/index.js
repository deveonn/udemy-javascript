// ? Funções de callback
// ? São funções que acontecem depois de outras coisas acontecerem, de outras funções serem executadas pra chamar uma outra função ...

// ? Ou seja, são funções que só vão acontecer depois que o código chegue em um estado desejado,
// ? assim chamando uma função, essa função que, deverá ser chamada pelo fluxo de código, é uma função de callback

// ? Na maioria das vezes ela é chamada como argumento de outra função

// * Abaixo criei funções que demoram pra acontecer, e são executadas em ordens diferentes, pra simular funções que pegam dados na web em funções diferentes, e em tempos diferentes elas conseguem "terminar" a consulta a API etc.

// TODO Na vida real, usamos isso para receber informações de API's por exemplo, então podemos renderizar um component etc só depois que tudo estiver nos conformes :D
// TODO Como a resposta da API pode demorar, callbacks são uteis para criar uma sequencia dentro fluxo de código ...

function generateRandInt() {
  const randomNumber = Math.random() * 10000;
  const randInt = Math.round(randomNumber);

  return randInt;
}

function f1(callback) {
  setTimeout(() => {
    console.log("f1");
    if (callback) callback();
  }, generateRandInt());
}

function f2(callback) {
  setTimeout(() => {
    console.log("f2");
    if (callback) callback();
  }, generateRandInt());
}

function f3(callback) {
  setTimeout(() => {
    console.log("f3");
    if (callback) callback();
  }, generateRandInt());
}

// Callback hell but useful to understand this :D
// Try to avoid nestings like these

f1(() => {
  f2(() =>
    f3(() => {
      console.log("Done!");
    })
  );
});