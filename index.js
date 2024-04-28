let nome = "Nome do herói";
let xp = 5005;
let elo = ""

if (xp >= 10001){
    elo = "Radiante";
}
else if(xp >= 9001){
  elo = "Imortal"
}
else if(xp >= 8001){
  elo = "Ascendente"
}
else if(xp >= 7001){
  elo = "Platina"
}
else if(xp >= 5001){
  elo = "Ouro"
}
else if(xp >= 2001){
  elo = "Prata"
}
else if(xp >= 1001){
  elo = "Bronze"
}
else{
  elo = "Ferro"
}

console.log("Seu herói chamado " + nome + " possui " + xp + " pontos de experiênca e está no elo " + elo + "!")