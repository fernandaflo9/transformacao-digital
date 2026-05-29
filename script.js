let candidaturas = 0;
let vagasVisualizadas = 0;

/* LOGIN */
function login() {
document.getElementById("auth").classList.add("escondido");
document.getElementById("sistema").classList.remove("escondido");
}

/* CADASTRO */
function cadastrarUsuario() {
alert("Cadastro realizado com sucesso!");
}

/* CURRÍCULO */
function enviarCurriculo() {
alert("Currículo enviado com sucesso!");
}

/* DETALHES */
function verDetalhes(tipo) {

vagasVisualizadas++;
document.getElementById("vagas").innerText = vagasVisualizadas;

document.getElementById("detalhes").classList.remove("escondido");

if(tipo === "adm") {
document.getElementById("tituloVaga").innerText = "Assistente Administrativo";
document.getElementById("descricao").innerText = "Organização administrativa e suporte interno.";
document.getElementById("local").innerText = "Fortaleza - CE";
}

if(tipo === "suporte") {
document.getElementById("tituloVaga").innerText = "Suporte Técnico";
document.getElementById("descricao").innerText = "Suporte a sistemas e usuários.";
document.getElementById("local").innerText = "Remoto / Híbrido";
}

}

/* CANDIDATURA */
function candidatar() {

candidaturas++;
document.getElementById("candidaturas").innerText = candidaturas;

document.getElementById("mensagem").innerText =
"✔ Candidatura enviada com sucesso! Boa sorte 🍀";

alert("Candidatura realizada!");
}