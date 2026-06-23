function calcularMediaPonderada(n1, n2, p1, p2){
    return (n1 * p1 + n2 * p2) / (p1 + p2);
}

let nt1 = Number(prompt("Digite a primeira nota: "));
let ps1 = Number(prompt("Digite o primeiro peso: "));
let nt2 = Number(prompt("Digite a segunda nota: "));
let ps2 = Number(prompt("Digite o segundo peso: "));

let calculomedia = calcularMediaPonderada(nt1, nt2, ps1, ps2);

console.log (`A média ponderada é ${calculomedia}.`);