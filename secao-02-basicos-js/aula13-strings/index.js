// Strings são indexadas, cada caractere tem um indice, que começa em 0 e vai até o fim de caracteres da strings

// Isso aqui eu n sei quando vou precisar mas ta ai ...
// Essa barra invertida faz uma especie de escape de texo ...
let umaString = "Um \"texto\"";
console.log(umaString)

// da pra fazer isso tbm
let umaString2 = "Um \\texto"
console.log(umaString2)

// Usando indexação das strings
console.log(umaString[4])

// Usando outros metodos do JS para manipular strings

// pegar um caractere
console.log(umaString.charAt(6))

// metodo para concatenar
console.log(umaString.concat(' em',' um',' lindo',' dia.'))

// mas normalmente para concatenar, acaba sendo melhor uma template string
// mais facil de ler, mais limpo ...

console.log(`${umaString} em um lindo dia.`)

// para saver qual é o indice de uma palavra dentro de uma string podemos usar indexOf()
// desta maneira:

console.log(umaString.indexOf('texto'))

// se tentarmos procurar um indice que não existe, indexOf retornará -1
console.log(umaString.indexOf(9))

// procure um caractere especifico depois de um indice(posiçao)informada
console.log(umaString.indexOf('o', 3))

// se n achar exibe -1 tbm
console.log(umaString.indexOf('u', 3))

// o lastIndexOf() é igual ao indexOf, porém, começa de trás pra frente(do final oara o inicio da string)

console.log(umaString.lastIndexOf('o', 3))

// substituindo palavras
console.log(umaString.replace('Um','Outro'))

// descobri o tamanho de uma string
console.log(umaString.length)

// replace vai apenas substituir o primeiro caractere que encontrar
let frase = 'O rato roeu a roupa do rei de roma.'
console.log(frase.replace('r', '#'))

// para fazer isso acima, so que, em toda a frase:
// usando EXPRESSÃO REGULAR(REGEX)

console.log(frase.replace(/r/g, '#'))

// o 0 tbm conta como um caractere
//            0123456789
let frase2 = 'O rato roe'

// Podemos também, recortar uma parte da string com slide()
// Abaixo, recortei a palavra "rato", informando o index de onde começar e terminar, respectivamente.

console.log(frase.slice(2, 6))

// o código abaixo é a mesma coisa que console.log(frase.length - 3)
// quanda usamos o negativo no slice, é como se ele começasse de TRAS PRA FRENTE!!!
console.log(frase.slice(-5))
console.log(frase.slice(-5, -1))

// Podemos dividir strings usando o seguinte método:

console.log(frase.split(' '))

// o método split, neste caso, vai retornar um array, que terá como objetos,
// as palavras da string que está na variavel frase, pois usamos o caractere espaço da frase como parametro para dividir
// em cada parte que tivesse espaço, então ele separou cada paralavra.

console.log(frase.split(' '))

// podemos determinar nossa divisão até certo ponto, por exemplo, podemos pedir para que ele recorte até três palavras:
console.log(frase.split(' ', 3))

// deixando a string em maiuscula e minuscula:

console.log(frase.toUpperCase())
console.log(frase.toLowerCase())

/**
 * .indexOf() retorna a posição de um caractere dentro de uma string
 * lastIndexOf() faz a mesma coisa que indexOf() porém começa de trás pra frente
 * replace vai substituir uma caractere que informar em seus parametros
 * length vai retornar a quantidade de caracteres dentro de uma string
 * 
 * 
 * 
 */
