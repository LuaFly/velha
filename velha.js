var img = '<img src="https://thumbs.gfycat.com/YoungPinkFirecrest-size_restricted.gif">'
var bola = '<img src="https://media.giphy.com/media/l3q2NvqacEdhTJ6Mw/giphy.gif">'
var casas=9;
var velha = '<img src="https://media.tenor.co/images/c7f38cf6f2ffb8508f212cd898a97762/tenor.gif">'

function comecar() {
    for (var i = 1; i <= 9; i++) {
        limparcaixa(i)
    }
    casas=9;
    document.comeca = img;
    document.vencedor = null;
    mensagem("começar.")
}

function mensagem(msg) {
    document.getElementById("vez").innerHTML = msg;
}

function movimento(item) {
    if (document.vencedor != null) {
        mensagem(document.vencedor + "é o vencedor, para de clicar")
    }
    else if (item.innerHTML == "") { // se o quadrado estiver vazio, entao coloca a escolha, se não trava o local
    	casas--;
        item.innerHTML = document.comeca;
        escComeca();
    } else {
        mensagem("O local já foi escolhido") // trava o local escolhido
    }
}

function escComeca() { //faz o X virar O e o O virar X
    if (vencedor(document.comeca)) {
        mensagem("Parabens" + document.comeca + "você ganhou!")
        document.vencedor = document.comeca;
        
    }
   else if (casas == 0) {
   	mensagem("Que peninha, não foi dessa vez")
   	document.vencedor=velha;

}
    else {
        if (document.comeca == img) { // se o que começou é x, entao retorna bolinha pra cada uma jogar uma vez
            document.comeca = bola
        }
        else {
            document.comeca = img// se está na bolinha, entao no proximo clique ele vira X
        }
        mensagem("é a vez do" + document.comeca)

    }
    
}

function vencedor(mover) { // possibilidades de ganhar
    var result = false;
    if (linha(1, 2, 3, mover) ||
        linha(4, 5, 6, mover) ||
        linha(7, 8, 9, mover) ||
        linha(1, 4, 7, mover) ||
        linha(2, 5, 8, mover) ||
        linha(3, 6, 9, mover) ||
        linha(1, 5, 9, mover) ||
        linha(3, 5, 7, mover)) {
        result = true // se conseguiu alguma dessas, resulta em verdade, e o jogador ganha
    }
    return result;
}

function linha(a, b, c, mover) { // vamos ver se a linha ganhou
    var resultado = false;
    if (caixa(a) == mover && caixa(b) == mover && caixa(c) == mover) {
        resultado = true;
    }
    return resultado
}

function caixa(number) {
    return document.getElementById("q" + number).innerHTML; // retorna o valor do quadrado
}

function limparcaixa(number) {
    document.getElementById("q" + number).innerHTML = "";
}
