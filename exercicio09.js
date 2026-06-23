let senha = prompt("Digite a senha: ");
let tentativas = 0;

while(senha !== "segredo123" && tentativas <= 2){
    senha = prompt ("Senha incorreta, Tente novamente: ");
    tentativas++;
}

if(senha === "segredo123"){
    console.log ("Acesso Permitido.");
}
else{
    console.log ("Conta Bloqueada.")
}