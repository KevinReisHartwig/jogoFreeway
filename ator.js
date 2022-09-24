// codigo do ator/vaca

let xAtor = 150;  //posição x,y do ator
let yAtor = 366;
let colisao = false;
let alturaAtor = 30;
let larguraAtor = 30;
let meusPontos = 0;

function mostrarAtor(){
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);  // posição das imagens e tamanho
}

// movimentar o ator usando ceta para cima e para baixo
function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){ //cima
    yAtor -= 3;
  }
  if(keyIsDown(DOWN_ARROW)){ //baixo
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){   //verificar colisão do da vaca no carro com codigo importado
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], carroComprimento, carroAltura, xAtor, yAtor, 15)
    if (colisao){
      somColisao.play();
      voltaPosicaoInicial();
      if(pontosMenorZero()){  
        meusPontos -= 1;  // diminui -1 se colidir
      }
      
    }
  }
}

function voltaPosicaoInicial(){  // se colidiu volta posição Y do ator
  yAtor = 366;
}

function colocarPlacarPontos(){ //colocar o placar 
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width/5 , 27);
  
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somPonto.play();
    voltaPosicaoInicial();
    
  }
}
function pontosMenorZero(){ //se retornar verdade reduz um ponto
    return meusPontos > 0;
    
}

function podeSeMover(){ //fazer ele não poder descer infinitamente
  return yAtor < 366;
  
}






