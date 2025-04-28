//ex 1 
/*
function distanciaRestante(distanciaTotal, distanciaPercorrida) {
    return distanciaTotal - distanciaPercorrida;
  } //função foi usada para fazer a subtração
  
  let distanciaTotal = Number(prompt("Digite a distância total (km):")); //falar a distância total
  let distanciaPercorrida = Number(prompt("Digite a distância percorrida (km):"));// distância percorrida
  
  let restante = distanciaRestante(distanciaTotal, distanciaPercorrida);//pega a função e adiciona os valores
  console.log(`Faltam ${restante} km para chegar ao destino.`);
  */

  // ex 2
  /*
function calcularGorjeta(valorRefeicao) {
  return valorRefeicao * 0.10;
}//função multiplica 

let valorRefeicao = Number(prompt("Digite o valor da refeição:"));//valor refeição
let gorjeta = calcularGorjeta(valorRefeicao);//calcula a gorjeta

console.log(`A gorjeta é de R${gorjeta.toFixed(2)}.`); // toFixed(2) faz com que o
 valor fique apenas com duas casas decimais depois da virgula
   */

  //ex 3
/*
function converterPolegadasParaCm(polegadas) {
    return polegadas * 2.54;
  }
  
  let valorPolegadas = Number(prompt("Digite o valor em polegadas:")); 
  let centimetros = converterPolegadasParaCm(valorPolegadas); 
  console.log(`A quantidade em centímetros é de ${centimetros} cm`);
  */
 //ex 4
 /*
 function idadeEmDias(idadeAnos){
    return idadeAnos * 365;
 }
let valorAnos = Number(prompt("Digite sua idade: "));
let dias = idadeEmDias(valorAnos);
console.log(`Você tem aproximadamente ${dias} dias vividos.`);
 */

//ex 5
/*
function precoUnitario(precoTotalPacote, numeroItens){
return precoTotalPacote / numeroItens;
}
let precoTotal = Number(prompt("Digite o preço total do pacote:"));
let precoItens = Number(prompt("Digite quantos itens foi comprado:"));
let precoUnico = precoUnitario(precoTotal,precoItens)
console.log(`O preço de um único item é de R$ ${precoUnico.toFixed(2)} `); // toFixed(2) faz com que o
//valor fique apenas com duas casas decimais depois da virgula
  */
//ex 6
/*
function minutosParaSegundos(minutos){
    return minutos*60;
}
let minutos = Number(prompt("Digite a quantidade de minutos"))
let segundos = minutosParaSegundos(minutos);
console.log (`A quantidade de segundos é de ${segundos} segundos `);
*/
//ex 7
/*
function ehNumero(valor){
    if (valor === parseFloat(valor)){
        return true;
    }
    else{
    return false
}
}
let valorDigitado = prompt("Digite alguma coisa:");//usuário digitar algo
valorDigitado = Number(valorDigitado);  //converte a string em número
console.log(ehNumero(valorDigitado)); // mostra se deu para converter para number ou não
*/
//ex 8

/*
function verificarPorta() {
  return portaAberta;  
}
let portaAberta = false

console.log(verificarPorta()); // retorna o valor 
*/
//ex 9
/*
function gerandoEmail(gerar){
    return gerar + "@exemplo.com"
}//adiciona o domínio do email 
let nome = prompt(" Digite o nome escolhido:")//nome para o email
let email = gerandoEmail(nome) //juntando o nome com o domínio
console.log ( `seu novo email é ${email} `)
*/
//ex 10
/*
function paginasRestantes(totalPaginas, paginasLidas){
return totalPaginas - paginasLidas;
}
let totalPaginas = prompt(" Digite a quantidade de páginas totais:")//quantidade de páginas totais
let paginasLidas = prompt(" Digite a quantidade de páginas lidas:")//quantidade de páginas lidas

let nLidas = paginasRestantes(totalPaginas,paginasLidas) //juntando o nome com o domínio
console.log ( `Quantidade de páginas restantes é de  ${nLidas} páginas`);
*/
//BLOCO 2
//ex 1
/*
function temperaturaAgradavel(temperatura){
    if ( temperatura >=20 && temperatura <=25){
        return true; // se a temperatura for maior ou igual que 20 e menor ou igual a 25 é true
    }   else{
        return false;
    }
    }
let temp= Number(prompt("Digite a temperatura:"));
console.log(temperaturaAgradavel(temp)); ativa a função
*/

//ex 2
/*
function checarAprovacao(nota){
    if(nota >=7){
        return "aprovado" //aprovado se for maior que 7 ou igual
    }
    else {
        return "reprovado"
    }
}
let notaAluno = Number(prompt("Digite a nota do aluno:"))
console.log(checarAprovacao(notaAluno));// ativa a função de aprovado ou reprovado
*/

//ex 3
/*
function temEntradaGratuita(idade){
    if (idade >=65){
        return true;// se for maior ou igual que 65
    }
    else{
        return false;
    }
}
let Idadepessoa = Number(prompt("Digite sua idade:" ));
console.log(temEntradaGratuita(Idadepessoa)); // vai ativar a função 
*/
//ex 4
/*
function ehZero(numero) {
    if (numero === 0) {
      return true;  // Se for 0
    } else {
      return false; // Se for qualquer outro número
    }
  }
  
  
  let numeroDigitado = Number(prompt("Digite um número:"));
  console.log(ehZero(numeroDigitado));
*/
//ex 5 
/*
function tipoDeDia(diaSemana) {
    if (diaSemana === "sábado" && diaSemana === "domingo") {
      return "Fim de semana"; // se for sabado e domingo é fim de semana
    } else {
      return "Dia útil"; // se nao for sabado ou domingo é dia útil
    }
  }
  
  
  let dia = prompt("Digite o dia da semana (em minúsculo):");
  console.log(tipoDeDia(dia)); // mostra o resultado(chama a função)
  */


  //BLOCO 3
  //ex 1
/*
  function simularElevador() {
    for (let andar = 1; andar <= 5; andar++) {// serve para ir do 1 ao 5
      console.log(`Subindo para o andar ${andar}`);
    }
  }

  simularElevador();//chama a função
  */

  //ex 2
/*
  function contarOvelhas() {
    for (let i = 1; i <= 5; i++) {
      console.log(`${i} ovelha...`);
    }
  }
  
  // Chamando a função:
  contarOvelhas();
*/
