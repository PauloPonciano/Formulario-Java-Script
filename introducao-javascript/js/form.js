var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteFormulario(form);

    var pacienteTr = montarTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagemsDeErro(erros);
        return;
    }

    form.reset();

});

function exibeMensagemsDeErro(erros) {
    var ul = document.querySelector("#mensagems-erro");
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}


function obtemPacienteFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso)"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);



    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("Digite um nome");
    }

    if (validaPeso(paciente.peso)) {
        erros.push("Peso Inválido.");
    }

    if (validaAtura(paciente.altura)) {
        erros.push("Altura Inválida.");
    }
    if(paciente.gordura.length == 0){
        erros.push ("Gordura nao pode estar em branco")
    }
    return erros;
}