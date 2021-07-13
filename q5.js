const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Digite um número -> '));

// Processamento

        function fatorial(num) {
            let fat = 1
            for(let contador = num; contador > 1; contador--) {
                fat = fat * contador
            };
            console.log(`${num}! = ${fat}`)
        };

// Saída

fatorial(numero);

};

main()