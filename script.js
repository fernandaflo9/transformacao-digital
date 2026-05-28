function selecionarVaga(vaga) {
    document.getElementById("vaga").value = vaga;
    alert("Vaga selecionada: " + vaga);
}

function cadastrar() {
    const nome = document.getElementById("nome").value;

    if (nome === "") {
        alert("Preencha seus dados!");
        return;
    }

    document.getElementById("status").classList.remove("escondido");

    alert("Candidatura enviada com sucesso! Boa sorte 🍀");

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
}