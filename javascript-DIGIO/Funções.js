const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
        idade: 15
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
        idade: 14
    },
    {
        nome: 'João',
        nota: 6,
        turma: '2C',
        idade: 17
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
        idade: 16
    }
];

function alunosAprovados(array, media) {
    let aprovados = [];

    for (let i = 0; i < array.length; i++) {

        const {nota, nome} = array[i];

        if (nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5))

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

for (let i = 0; i < alunos.length; i++) {
    console.log(calculaIdade.call(alunos[i], 30));
    console.log(calculaIdade.apply(alunos[i], [15]))
}
