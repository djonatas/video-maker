const readLine = require('readline-sync');

function start() {
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm(){
        return readLine.question('Qual termo você busca ? ');
    }

    function askAndReturnPrefix(){
        const prefix = ['O que é ?', 'Onde é? ', "Qual a história ?"];
        const selectedPrefixIndex = readLine.keyInSelect(prefix, "Escolha uma opção para seguir: ");

        return  prefix[selectedPrefixIndex];
    }
    console.log(content);
}

start();