const prompt = require('prompt-sync')();

function main() {

// Entrada

    const numero = Number(prompt('Dê um valor para N -> '));

// Processamento

    function contador(num1, num2) {
        for(num2 = 1; num2 <= num1; num2++) {
            console.log(num2);
        };
    };

// Saída

contador(numero, 1)
};

main()