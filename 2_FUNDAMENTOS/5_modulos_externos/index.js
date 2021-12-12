const minimist = require("minimist");

const args = minimist(process.argv.slice(2))
const args2 = minimist(process.argv.slice(3))


console.log(args)
console.log(args2)

const nome = args["nome"]
const profissao = args["profissao"]

console.log(`O seu nome é ${nome} e a sua profissão é ${profissao}`)