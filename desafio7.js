//Utilização e funcionamento do 'Math.random()'
let numero1 = Math.random(); //Este comando gera um número aleatório entre 0 Incluivo (pode ser 0.00) e 1 Exclusivo (nunca chegará à 1);
alert(numero1);

let numero2 = parseInt(Math.random() * 10 + 1); //Este comando gera um número aleatório de 0 inclusico e 10 Excluivo ( +1 serve para ser de 1 à 10);
alert(numero2);

let numero3 = parseInt(Math.random() * 1000 + 1);
alert(numero3);