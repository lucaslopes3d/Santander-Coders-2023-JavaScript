//ESTRUTURA DE DADOS - ARRAY - PARTE I
//COMO CRIAR UM ARRAY
let arr = ['Lucas', 33, 1.68, true]     //Cria-se a variável e adiciona o []


//COMO ACESSAR OS ELEMENTOS DO ARRAY
console.log('Primeiro elemento:', arr[0])
console.log('Segundo elemento:', arr[1])
console.log('terceiro elemento:', arr[2])
console.log('Quarto elemento:', arr[3])


//COMO OBTER O TAMANHO DO ARRAY
console.log('Tamanho do arry é:', arr.length)


//PERCORRENDO O ARRAY
//Método 1
for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}


//Método 2
for (let elemento of arr){
    console.log(elemento)
}

console.clear()

//Método 3
for (let indice in arr){
    console.log(indice, arr[indice])
}