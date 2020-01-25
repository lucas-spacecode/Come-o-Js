const escola = "cod3r"

console.log(escola.charAt(4))//seleciona o caractere referente a númeração
console.log(escola.charAt(5))//caso a númeração não corresponda = null
console.log(escola.charCodeAt(3))//valor da tabela unicode
console.log(escola.indexOf('3'))//valor específico do caracteri

console.log(escola.substring(1))//apartir do indice 1 até o último
console.log(escola.substring(0, 3))//apartir do indice 0 até o 3 sem incluir o 3

console.log('escola '.concat(escola).concat('!'))//concatena strings com variáves formando síntaxes
console.log('escola ' + escola + '!')//O sinal + tbm concatena se for usado em um contesto de string
console.log(escola.replace(3, 'e'))//substitui o caractere desejado por outro

console.log('Ana,Mária,Pedro'.split(','))//Cria um array com o caractere selecionado
