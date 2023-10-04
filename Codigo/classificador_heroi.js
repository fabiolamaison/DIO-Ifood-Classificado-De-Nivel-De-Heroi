let heroi = {nome: 'Joaquin',nivel:'', exp:9001}

console.log(heroi.exp)
console.log(heroi.nivel)

switch(true) {
    case heroi.exp < 1001:
        heroi.nivel = 'Ferro';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 2001:
        heroi.nivel = 'Bronze';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 5001:
        heroi.nivel = 'Prata';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 7001:
        heroi.nivel = 'Ouro';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 8001:
        heroi.nivel = 'Platina';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 9001:
        heroi.nivel = 'Ascendente';
        console.log(heroi.nivel);
        break;
    case heroi.exp < 10001:
        heroi.nivel = 'Imortal';
        console.log(heroi.nivel);
        break;
    case heroi.exp > 10000:
        heroi.nivel = 'Radiante';
        console.log(heroi.nivel);
        break;
    }

console.log(heroi.nivel)

console.log(`O herói de nome ${heroi.nome}, está no nível de ${heroi.nivel}`)