// imagens do jogo e sons

//imagens
let imagemEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somColisao;
let somPonto;
let somTrilha;



function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png") //carregar imagens
  imagemDoAtor = loadImage("Imagens/ator-1.png")
  imagemCarro = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,imagemCarro, imagemCarro2, imagemCarro3];
  
  somColisao = loadSound("Sons/colidiu.mp3") //carregar sons
  somPonto = loadSound("Sons/pontos.wav")
  somTrilha = loadSound("Sons/trilha.mp3")
  
}
