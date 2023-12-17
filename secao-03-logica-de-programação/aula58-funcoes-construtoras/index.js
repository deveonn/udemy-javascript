// ? Funções construtoras sempre vao ser declaradas com seu nome de função em maiusculo, e quando instanciadas posteriormente vamos usar a palavra new


// declarando uma função construtora
function CreateProduct(id, name, category) {
  this.id = id
  this.name = name
  this.category = category

  // podemos usar métodos normalmente ...
  this.showProductData = () => {
    console.log(id, name, category)
  }
}

// instanciando uma função construtora
const product1 = new CreateProduct( 123, 'Smartphone ...', 'Cellphones...' )
product1.showProductData()


/**
 * A palavra "new" cria um objeto e faz o "this" apontar para o objeto que está sendo usado e 
 * retorna implicitamente um objeto para a variável(ou seja, não precisamos usar o return da função ) 
 */

