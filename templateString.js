const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' //sem template não da para quebrar as linhas

const template = `
Olá
${nome}`//com template leva-se em consideração a quebra de linha
console.log(template)
console.log(concatenacao)

//expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up(' cuidado')}!`)