//LAÇO NUMÉRICO: FOR
const input = require('readline-sync')
//O PROBLEMA
const nota1 = Number(input.question('Informe a nota 1: ')) 
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))

let media = (nota1 + nota2 + nota3) / 3

//ACUMULADOR
let acumulador = 0

acumulador = acumulador + 10   //Forma 1
acumulador += 2                //Forma 2
acumulador ++                  //Forma 3

console.log(acumulador)

console.clear()

//ESTRUTURA FOR
for(let i = 0; i < 10; i++){
    console.log('Repetição', i)
}

console.clear()

for(let i = 10; i >= 0; i--){
    console.log('Repetição', i)
}

console.clear()


//RESOLVENDO O PROBLEMA INICIAL:
let nota
let soma = 0

for(let i = 1; i <= 3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) 

    soma = soma + nota
}

console.log(`A média do aluno é ${soma/3}.`)