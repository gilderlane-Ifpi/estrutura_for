const prompt = require('prompt-sync')();

function main(){

// Entrada

    const numero = Number(prompt('Dê o número de elementos da sequência: '));

// Processamento

    function sequencia(num) {
    let num2 = 0;
    console.log("Sequência:");
    for (let contador = 1; contador <= num; contador++) { 
        num2 = num2 + contador; 
        console.log(num2);
    }
}

// Saída

sequencia(numero);

}

main()