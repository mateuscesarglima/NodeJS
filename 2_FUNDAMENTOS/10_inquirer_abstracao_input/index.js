const inquirer = require("inquirer")
const chalk = require("chalk")


// Método responsável por realizar as pergutas
inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    },
    {
        name: 'p3',
        message: 'Qual a terceira nota?'
    }

]).then((answers) => {
    console.log(answers)
    const media = ((parseFloat(answers.p1) + parseFloat(answers.p2) + parseFloat(answers.p3)) / 3)
    if(media >= 7){
        console.log(chalk.green.bold("\n" + `A media é: ${media} ` + "\n"))
        console.log(chalk.bgGreen.white.bold("\n" + "Você Está Aprovado!" + "\n"))
    }else{
        console.log(chalk.bgRed.white.bold("\n" + `A media é: ${media} ` + "\n"))
        console.log(chalk.bgRed.white.bold("É necessário que você faça a prova de recuperação!" + "\n"))
    }
    
}).catch(err => console.log(err))