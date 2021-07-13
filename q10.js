const prompt = require('prompt-sync')();

function main() {

// Entrada

    const limiteSuperior = Number(prompt('Digite o limite superior --> '));
    const limiteInferior = Number(prompt('Digite o limite inferior --> '));
    
// Processamento

        function partOuImpar(num1, num2) {
            console.log(`Números pares entre ${num2} e ${num1}`)
            for(let contador = 1; contador <= num1; contador++) {
                if(contador % 2 !== 0) {
                    console.log(`${contador} é ímpar`)
                }
            }
        }

// Saída

partOuImpar(limiteSuperior, limiteInferior);
};

main()