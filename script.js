const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
const texto = document.queryselector('#entrda-de-texto').value; 
const camporesultado =document.queryselector('#resultado-palavrachave');
camporesultado.textcontent = texto 
const palavras = processatexto(texto);

camporesultado.textocontent = palavras.join("-")
}

function processatexto(texto){
    let palavras = texto.split(/[^a-za-z]+/);
    return palavras;
}