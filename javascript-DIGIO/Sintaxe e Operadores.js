function criaPrimeiraFrase(num1, num2){
    let saoIguais = "";
    
    num1 === num2 ? saoIguais = "são" : saoIguais = "não são";

    return `Os números ${num1} e ${num2} ${saoIguais} iguais.`
    
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    const comparadez = soma > 10;
    const comparavinte = soma > 20;
    let resultado = ""

    comparadez ? resultado = "maior que dez(10)" : resultado = "menor que dez(10)"
    comparavinte? resultado += " e maior que vinte(20)" : resultado += " e menor que vinte(20)"

    return ` Sua soma é ${soma}, que é ${resultado}.`

}

function comparaNumeros(num1, num2){
    if(num1 == (undefined||null) || num2 == (undefined||null)) return "São necessários dois números";

    const primeiraFrase = criaPrimeiraFrase(num1, num2)
    const segundaFrase = criaSegundaFrase(num1, num2)

    return primeiraFrase + segundaFrase
}

console.log(comparaNumeros(11))