

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)


const nome = args[0].split("=")[1]

console.log("nome " + nome)


const idade = args[1].split("=")[1]

console.log("Idade " + idade)

console.log(`O nome informado é ${nome} e ele tem idade de ${idade} anos!`)