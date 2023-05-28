//FUNÇÕES
function saudacao() {
    console.log('Olá, seja bem vindo(a) ao nosso curso de JavaScript!')
}

saudacao()


//Como enviar parâmetros para as funções
function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá ${nome}, seja bem vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Lucas', 'Html & CSS')

//-------------

function saudacao(nome, curso) {
    console.log(`Olá ${nome}, seja bem vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Lucas', 'JavaScript')

//-------------

function saudacao(nome, curso = 'JavaScript') {
    console.log(`Olá ${nome}, seja bem vindo(a) ao nosso curso de ${curso}!`)
}

saudacao('Lucas')


console.clear()


//Retorno da Função
function soma(numero1, numero2){
    console.log('Soma =', numero1 + numero2)
}

soma(10, 20)

//--------------

function soma(numero1, numero2){
    return numero1 + numero2
}

const resultado = soma(10, 20)

console.log(resultado)