const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//isInteger verífica se o número é inteiro ou não
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.455
const avaliacao2 = 6.988

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//toFixed defini as casas decimais 
console.log(media.toString( ))//toString defini a const como string
console.log(media.toString(2))//Adicionando o valor 2 ele exibi como binário
console.log(typeof media)