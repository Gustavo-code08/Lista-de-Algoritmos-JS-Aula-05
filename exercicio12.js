function imc(peso,altura){
    let imc = peso / (altura * altura);
    
    if(imc < 18.5){
        return ("Abaixo do peso.");
    }
    else if(imc >= 18.5 && imc <=24.9){
        return ("Peso normal.");
    }
    else if(imc >= 25 && imc <=29.9){
        return ("Sobrepeso.");
    }
    else{
    return ("Obesidade.");
    }
}

let pes = Number(prompt("Digite o seu peso (em kg): "));
let alt = Number(prompt("Digite sua altura (em m): "));

let imcCalculado = imc(pes,alt);

console.log(`Seu estado é ${imcCalculado}`)