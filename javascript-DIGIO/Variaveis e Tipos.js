// Atividade 1
// Solução 1
function verificaPalidromo(string){
    if(!string) return "String inexistente";

    if(string.split("").reverse().join("") === string) return "É Palidromo";
    else{
        return "Não é palidromo"}
}

// Solução 2
function verificaPalidromo2(string){
    if(!string) return "String inexistente";

    let frase = string.toLowerCase();
    
    for(let i = 0; i < frase.length / 2; i++) {
        if (frase[i] !== frase[frase.length -1 - i]) return "Não é palidromo";
    }

    return "É palidromo"
}

// console.log(verificaPalidromo("ova"))
// console.log(verificaPalidromo2("Ovo oVo"))


// Atividade 2
function substituirPares(array){
    if (!array.length || !array) return -1

    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) array[i] = 0;
    }
    return array
}

console.log(substituirPares([0,1,3,4,6,80,33,23,90]))
console.log(substituirPares([]))