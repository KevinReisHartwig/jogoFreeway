// jogo da vaca atravesando a estrada
function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  mostrarCarro();
  mostrarAtor(); 
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  marcaPonto();
  colocarPlacarPontos();
  pontosMenorZero();
  podeSeMover();
}
















