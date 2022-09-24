// codigo do carro
//listas das posição x e y e a velocidade dos carros
let xCarros = [550, 550, 550, 550, 550, 550] ; //carro1=[0] , carro2=[1], carro3[2]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [8.5, 8, 7.5, 9, 7, 10];
let carroComprimento = 50;
let carroAltura = 40;

//colocar os carros na estrada
function mostrarCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  image(imagemCarros[i], xCarros[i], yCarros[i], carroComprimento,carroAltura ); // posição das imagens e tamanho
  }
} 
// fazer o carro andar
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}
// fazer o carro voltar para passar na estrada infinitamente
function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++)
    if(passouTodaTela(xCarros[i])){
      xCarros[i] = 550;
  }

}

function passouTodaTela(xCarro){ //verificar se o carro passou da tela
  return xCarro < -50;
}
