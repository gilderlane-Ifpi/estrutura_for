const prompt = require('prompt-sync')();

function main() {

    let limiteSuperior = Number(prompt('Digite o limite superior --> '));
    let limiteInferior = Number(prompt('Digite o limite inferior --> '));

        function primo(num2, num) {
            for (let contador = num2; contador < num; contador++) {
                if (contador == 1) {
                contador++;
            }
                if (contador == 2 || contador == 3 || contador == 5 || contador == 7) {
                console.log(`Número ${contador} é primo!`);
                } else if((contador%2 != 0) && (contador%3 != 0) && (contador%5 != 0) && (contador%7 != 0)) {
                console.log(`Número ${contador} é primo!`);
            }
        }
    }

primo(limiteInferior, limiteSuperior)

};

main();