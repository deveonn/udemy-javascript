# Notas da aula

- Lembre-se que arrows functions vão manter a instancia do this travado no escopo onde são chamadas, funções anônimas não, ou seja, as arrows functions prendem a instancia do this a função que elas estão alocadas. 

- Por isso na linha 62 usei o '.bind(this)', pois quando ele é usado em uma função anônima, ele pode 'prender' o this pra ela, assim não instanciando o objeto window do navegador e permitindo o uso do this apenas no escopo da função clickButtons().