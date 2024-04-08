let nomeHeroi = "Vitor"
console.log("olá " +nomeHeroi+ " vamos ver em que nível voce está" )

let estrelas = 11000

if(estrelas <= 1000){
    nivel = "ferro"
}
else if(estrelas >= 1001 && estrelas <= 2000){
    nivel = "bronze"
}
else if(estrelas >= 2001 && estrelas <= 5000){
    nivel = "prata"
}
else if(estrelas >= 5001 && estrelas <= 7000){
    nivel = "ouro"
}
else if(estrelas >= 7001 && estrelas <= 8000){
    nivel = "platina"
}
else if(estrelas >= 8001 && estrelas <= 9000){
    nivel = "ascendente"
}
else if(estrelas >= 9001 && estrelas <= 10000){
    nivel = "imortal"
}
else if(estrelas >= 10001){
    nivel = "radiante"
}

console.log( nomeHeroi+ " voce tem "+ estrelas + " estrelas " + "e está no nivel " + nivel )
console.log("Usuario: " + nomeHeroi)
console.log("Estrelas: " + estrelas)
console.log("Nivel: " + nivel)
