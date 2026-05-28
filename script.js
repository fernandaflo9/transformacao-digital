function abrirFormulario(vaga) {
    document.getElementById("formulario").classList.remove("escondido");
    document.getElementById("vaga").value = vaga;

    // janela ao clicar em candidatar-se
    alert("Candidatura enviada, boa sorte 🍀");
}

function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if (nome === "" || email === "" || telefone === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // janela ao clicar em cadastrar
    alert("Cadastro realizado com sucesso ✔");

    // fecha formulário (opcional, deixa mais limpo)
    document.getElementById("formulario").classList.add("escondido");

    // limpa campos
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}