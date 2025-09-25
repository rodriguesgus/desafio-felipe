// DESAFIO 1 - Criar um classificador de nível de herói

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
//"O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeHeroi = "CoffeeAddict400";
let xpHeroi = 3350;


function exp(xpHeroi){

if(xpHeroi <= 1000){
    return("Ferro");

}else if(xpHeroi > 1000 && xpHeroi <= 2000){
    return("Bronze");

}else if(xpHeroi > 2000 && xpHeroi <= 5000){
    return("Prata");

}else if(xpHeroi > 5000 && xpHeroi <= 7000){
    return("Ouro");

}else if(xpHeroi > 7000 && xpHeroi <= 8000){
    return("Platina");

}else if(xpHeroi > 8000 && xpHeroi <= 9000){
    return("Ascendente");

}else if(xpHeroi > 9000 && xpHeroi <= 10000){
     return("Imortal");

}else(xpHeroi >= 10000)
    return("Radiante");

}

console.log("O Herói de nome, " + nomeHeroi + " está no nível - " + exp(xpHeroi) + "!");