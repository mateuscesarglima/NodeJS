const path = require('path')

const extension = path.extname("arquivo.php")

if(extension === ".php"){
    console.log("PHP")
}else{
    console.log("Não é php")
}
