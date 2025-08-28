const botaoMostraPalavras = document.querySelector('#botao-palavrachave');
botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);
function mostraPalavrasChave() {
const texto = document.queryselector('#entrda-de-texto').value; 
const camporesultado =document.queryselector('#resultado-palavrachave');
camporesultado.textcontent = texto 
const palavras = texto.split("");
camporesultado.textocontent = palavras.join("-")
}