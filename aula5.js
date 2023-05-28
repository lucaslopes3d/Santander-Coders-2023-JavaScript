//CERÇÃO(CONVERSÃO) DE TIPOS
// 1 - COERÇÃO EXPLÍCITA (MANUAL)
const numero = 10

console.log(numero, typeof numero)

const numeroEmFormaDeString = String(numero)            //1a forma
console.log(numeroEmFormaDeString, typeof numeroEmFormaDeString) 

console.log(Number('123456'))
console.log(parseFloat('123456.234'))
console.log(parseInt('123456.234'))
console.log(Boolean(1))
console.log(Boolean(0))

console.clear()



// 2 - COERÇÃO IMPLÍCITA (AUTOMÁTICA)
console.log('10' + 1)
console.log('10' - 1)
console.log(10 * '1')
console.log(10 - 'asasa')


console.clear()

//OUTROS EXEMPLOS
//Qual será a saída desse código?
let n = 1 + '1'

n = n - 1

console.log(n)

//Qual será a saída desse código?
console.log(2 + 3 + 4 + '5')

//Qual será a saída desse código?
console.log('5' + 2 + 3 + 4)

//Qual será a saída desse código?
console.log('10' - '4' - '3' - 2 + '5')