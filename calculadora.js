function
calculadora(){
  //constantes
  const precoPorPalavra = 0.02;
  const adicionalNovoArtigo = 5;
  //input do usuario
  let numeroArtigos = document.getElementById("campo1").value |0;  
  let palavrasPorArtigo = document.getElementById("campo2").value |0;
  let pauta = document.getElementById("opcaoPauta").value;
  let referencia = document.getElementById("opcaoReferencia").value;
  let imagens = document.getElementById("opcaoImagens").value;
  
  //calculo do total de palavras
  let palavras = numeroArtigos * palavrasPorArtigo;
  //calculo referente a pauta
  let precoPauta = (pauta-1) * 5;
  //calculo referente a imagens
  let precoImagens = 0;
  if (imagens==1){
    precoImagens = 5;
  } else if (imagens ==2){
    precoImagens = 2;
  } else {
    precoImagens = 0;
  }
  
  //calculo do total  
  let totalSemDesconto = precoPorPalavra * palavras + (adicionalNovoArtigo + precoPauta + precoImagens)* numeroArtigos;
  
  //aplicando descontos
  let descontoPorQuantidade = 0;
  let descontoReferencia = 0;
  
  if (numeroArtigos > 19) {
    descontoPorQuantidade = 0.2; 
  } else if (numeroArtigos > 9) { 
    descontoPorQuantidade = 0.15;
  } else if (numeroArtigos > 4) {
    descontoPorQuantidade = 0.1;
  } else descontoPorQuantidade = 0;
  
  if (referencia == 1){
    descontoReferencia = 0,1;
  } else if (referencia ==2){
    descontoReferencia = 0,5;
  } else if (referencia==3){
    descontoReferencia = 0,15;
  } else {
    descontoReferencia = 0;
  }
  
  let descontoTotal = descontoPorQuantidade + descontoReferencia;
  let totalComDesconto = totalSemDesconto * (1 - descontoTotal);
  
  //envio dos resultados
  document.getElementById("numPalavras").innerHTML = palavras;
  document.getElementById("desconto").innerHTML = descontoTotal * 100;
  document.getElementById("totalSemDesconto").innerHTML = totalSemDesconto;
  document.getElementById("totalComDesconto").innerHTML = totalComDesconto;
  }
