// Criar um classificador de nível de herói

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