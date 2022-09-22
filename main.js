let nome = prompt('Informe o nome do Candidato: ');
let idade = prompt('Informe a idade do candidato: ');


function AgeCheck() {
    if (parseInt(idade) >= 18) {
        alert('O Candidato ' + nome + ' está apto á inicia o processo.');

    } else {
        alert('O Candidato' + nome + ' não está apto para iniciar o processo.');

    }

}

function OnCNH() {
    let chosen = prompt('É  primeira vez que que realiza a inscrição para obter a CNH? \n'
        + '1 - Sim'
        + '2 - Não');

    if (chosen == 1) {
        alert('Certo, vamos te encaminhar a um atendimento para estarmos realizando a sua matrícula');
    } else {
        alert('Certo, iremos checar seu histórico e te encaminhar a um atendimento');
    }
}

AgeCheck()
OnCNH()
