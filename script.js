const botoes = document.querySelectorAll("button");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Candidatura enviada com sucesso!");
    });
});