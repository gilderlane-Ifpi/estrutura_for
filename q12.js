const prompt = require('prompt-sync')();

function main() {

    const numero = Number(prompt('Dê um valor a N --> '));

        function somador(num) {
            let soma = 0;
            for(contador = 1; contador <= num; contador++) {
                numeroDaLista = Number(prompt(`Dê o valor do ${contador} elemento da lista - > `))
                soma = soma + numeroDaLista;
            }
            console.log(`A soma de todos os números da lista de ${num} elementos é:`, soma)
            console.log(`A média desse número é ${soma}/${contador-1} = ${soma / (contador-1)}`)
        }


somador(numero);

};

main()