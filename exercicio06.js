let num = Number(prompt("Digite um número inteiro: "));

if(num%2===0){
    let triplo = num * 3;
    console.log (`O número ${num} é par, e o seu triplo é ${triplo}`);
}
else{
    let quadrado = num * num
    console.log (`O número ${num} é ímpar, e o seu quadrado é ${quadrado}`)
}