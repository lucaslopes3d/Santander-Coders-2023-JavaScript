// OPERADORES BOOLANOS

const numero = 10

// Igualdade:              == (ou ===) - Utilizar sempre 3, pois verifica o conteúdo e o tipo da variável
console.log(numero == 20)
// Desigualdade:           != (ou !==)
console.log(numero != 20)
// Maior que:              >
console.log(numero > 20)
// Maior ou igual:         >=
console.log(numero >= 20)
// Menor que:              <
console.log(numero < 20)
// Menor ou igual:         <=
console.log(numero <= 20)


// CONJUNÇÕES LÓGICAS
// AND  =>  &&
let idade = 33
let cnh = true

const possoDirigir = idade >= 18 && cnh === true

console.log('Posso dirigir? -', possoDirigir)


// OR  =>  ||
idade = 70

const votoFacultativo = idade <= 17 || idade >= 70

console.log('O voto é facultativo? -', votoFacultativo)


// NOT  =>  !
const estouGostandoDoCurso = false

console.log(!estouGostandoDoCurso)