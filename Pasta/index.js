/* O Que deve ser utilizado
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */

let nomeHeroi = "Arthur";
let xpHeroi = 7500;
const msgHeroi = " O herói de nome ";
const msgnivel = " está no nível de ";
const nivelHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

switch (true)
{
    case (xpHeroi <= 1000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[0]);
    break;

    case (xpHeroi >= 1001 && xpHeroi <= 2000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[1]);
    break;

    case (xpHeroi >= 2001 && xpHeroi <= 5000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[2]);
    break;

    case (xpHeroi >= 5001 && xpHeroi <= 7000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[3]);
    break;

    case (xpHeroi >= 7001 && xpHeroi <= 8000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[4]);
    break;

    case (xpHeroi >= 8001 && xpHeroi <= 9000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[5]);
    break;

    case (xpHeroi >= 9001 && xpHeroi <= 10000):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[6]);
    break;

    case (xpHeroi >= 10001):
    console.log(msgHeroi + nomeHeroi + msgnivel + nivelHeroi[7]);
    break;
}

