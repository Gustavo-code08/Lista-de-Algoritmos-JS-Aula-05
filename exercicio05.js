let saldoatual = Number(prompt("Digite seu saldo atual: "));
let saque = Number(prompt("Digite quanto quer sacar: "));

const saldo = saldoatual - saque;

if(saque <= saldoatual){
    console.log (`Saque realizado com sucesso! Novo saldo: R$${saldo}.`)
}
else{
    console.log ("Saldo insuficiente.")
}