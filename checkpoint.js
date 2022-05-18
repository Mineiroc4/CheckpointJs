/*
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/
function microondas(opcao,tempo){ 

  let tempopipoca = 10
  let tempomacarrao = 8
  let tempocarne = 15
  let tempofeijao = 12
  let tempobrigadeiro = 8

  if (opcao == 1 && tempo < tempopipoca){ // teste para tempo insuficiente
    console.log("Prato pronto, bom apetite")
    return "Tempo Insuficiente !!"
  }else if (opcao == 1 && tempo == tempopipoca * 2){ // teste para a comida queimada
    console.log("Prato pronto, bom apetite")
    return "A comida queimou!"
  }else if (opcao == 1 && tempo == tempopipoca * 3){  // Teste para o microondas explodir
    console.log("Prato pronto, bom apetite")
    return "Kabumm"
  }

  if (opcao == 2 && tempo < tempomacarrao){ // teste para tempo insuficiente
    console.log("Prato pronto, bom apetite")
    return "Tempo Insuficiente !!"
  }else if (opcao == 2 && tempo == tempomacarrao * 2){  // teste para a comida queimada
    console.log("Prato pronto, bom apetite")
    return "A comida queimou!"
  }else if (opcao == 2 && tempo == tempomacarrao * 3){  // Teste para o microondas explodir
    console.log("Prato pronto, bom apetite")
    return "Kabumm"
  }

if (opcao == 3 && tempo < tempocarne){  // teste para tempo insuficiente
  console.log("Prato pronto, bom apetite")
  return "Tempo Insuficiente !!"
}else if (opcao == 3 && tempo == tempocarne * 2){ // teste para a comida queimada
  console.log("Prato pronto, bom apetite")
  return "A comida queimou!"
}else if (opcao == 3 && tempo == tempocarne * 3){ // Teste para o microondas explodir
  console.log("Prato pronto, bom apetite")
  return "Kabumm"
}

if (opcao == 4 && tempo < tempofeijao){ // teste para tempo insuficiente
  console.log("Prato pronto, bom apetite")
  return "Tempo Insuficiente !!"
}else if (opcao == 4 && tempo == tempofeijao * 2){  // teste para a comida queimada
  console.log("Prato pronto, bom apetite")
  return "A comida queimou!"
}else if (opcao == 4 && tempo == tempofeijao * 3){  // Teste para o microondas explodir
  console.log("Prato pronto, bom apetite")
  return "Kabumm"
}

if (opcao == 5 && tempo < tempobrigadeiro){ // teste para tempo insuficiente
  console.log("Prato pronto, bom apetite")
  return "Tempo Insuficiente !!"
}else if (opcao == 5 && tempo == tempobrigadeiro * 2){  // teste para a comida queimada
  console.log("Prato pronto, bom apetite")
  return "A comida queimou!"
}else if (opcao == 5 && tempo == tempobrigadeiro * 3){ // Teste para o microondas explodir
  console.log("Prato pronto, bom apetite")
  return "Kabumm"
 }else{
   return "Prato inexistente"  // retorno de prato inexistente em caso de valor não informado anteriormente.
 }
}
console.log(microondas(5,24)) // campo de entrada de valores para teste.