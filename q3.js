const prompt = require('prompt-sync')();

function main() {

// Entrada

    const primeiroTermo = Number(prompt('Insira o primeiro termo da P.A --> '));
    const enesimoTermo = Number(prompt('Insira o enésimo termo da P.A --> '));
    const razao = Number(prompt('Insira a razão da P.A --> '));

// Processamento

        function progressaoAritemetica(num1, num2, num3) {
            let progressaoA = num1 + (num2 - 1) * num3;
            for(let contador = 0; contador < progressaoA; contador++) {
                console.log(contador);
            };
        };

// Saída

progressaoAritemetica(primeiroTermo, enesimoTermo, razao);

};

main();