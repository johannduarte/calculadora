function
calculadora(){
  //constantes
  const precoPorPalavra = 0.02;
  const adicionalNovoArtigo = 5;
  //input do usuario
  let numeroArtigos = document.getElementById("campo1").value |0;  
  let palavrasPorArtigo = document.getElementById("campo2").value |0;
  //calculo do total de palavras
  let palavras = numeroArtigos * palavrasPorArtigo;
  //calculo do preço total
  let totalSemDesconto = precoPorPalavra * palavras + adicionalNovoArtigo * numeroArtigos;
  //aplicando descontos
  let descontoPorQuantidade = 0;
  
  if (numeroArtigos > 19) {
    descontoPorQuantidade = 0.2; 
  } else if (numeroArtigos > 9) { 
    descontoPorQuantidade = 0.15;
  } else if (numeroArtigos > 4) {
    descontoPorQuantidade = 0.1;
  } else descontoPorQuantidade = 0;
  
  let descontoTotal = descontoPorQuantidade;
  let totalComDesconto = totalSemDesconto * (1 - descontoTotal);
  
  //envio dos resultados
  document.getElementById("numPalavras").innerHTML = palavras;
  document.getElementById("totalSemDesconto").innerHTML = totalSemDesconto;
  document.getElementById("totalComDesconto").innerHTML = totalComDesconto;
  }
