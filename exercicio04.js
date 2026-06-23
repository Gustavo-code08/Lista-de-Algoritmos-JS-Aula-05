let lado1 = Number(prompt("Digite o valor do primeiro lado do triângulo: "));
let lado2 = Number(prompt("Digite o valor do segundo lado do triângulo: "));
let lado3 = Number(prompt("Digite o valor do terceiro lado do triângulo: "));

if(lado1 === lado2 && lado2 === lado3){
    console.log ("O triângulo é equilátero.");
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log ("O triângulo é isósceles.");
}
else{
    console.log ("O triângulo é escaleno.");
}