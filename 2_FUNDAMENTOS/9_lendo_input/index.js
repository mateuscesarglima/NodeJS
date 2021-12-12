const chalk = require("chalk")

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual a sua linguagem preferida?" + "\n", (language) => {

    if (language === "html" || language === "HTML") {
        console.log(chalk.bgRed.white.bold("Isso nem é linguagem!"))
        readline.close()
    } else {

        console.log(chalk.green.bold(`A minha linguagem preferida é ${language}`))
        readline.close()
    }

})

