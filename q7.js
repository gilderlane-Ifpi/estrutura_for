const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Dê um valor a N --> '));

// Processamento

        function somador(num) {
            let soma = 0;
            for(let contador = 1; contador <= num; contador++) {
                soma = soma + contador ;
            }
            console.log(`A soma de todos os números entre 1 e ${num} é:`, soma)
        }

// Saída

somador(numero);

};

main()