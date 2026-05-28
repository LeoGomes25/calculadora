function calcular(tipo, valor) {
    if (tipo == 'acao') {
        if (valor == 'c') {
            //limpa o visor (id resultado)
            document.getElementById("resultado").value = '';
        }

        // botões de calculos matematicos
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById("resultado").value += valor;
        }

        //botão de resultado 
        if (valor === '=') {
            const valor_campo = eval(document.getElementById("resultado").value);
            document.getElementById("resultado").value = valor_campo;
        }


    } else if (tipo == 'valor') {
        document.getElementById("resultado").value += valor;
    }
    console.log(tipo, valor);
};