//OBJETOS
//Como criar um ojeto no JavaScript
let pessoa = {
    nome: 'Lucas',
    idade: 33,
}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
//Forma alteranativa de acessar a chave do objeto
console.log(pessoa['nome'])



//Como adicionar um par chave-valer
pessoa.altura = 1.67

console.log(pessoa)



//Como remover um par chave-valor
delete pessoa.altura

console.log(pessoa)


console.clear()


//Como percorrer
for (let chave in pessoa){
    console.log(chave)
}