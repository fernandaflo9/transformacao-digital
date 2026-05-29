function entrar() {
const email = document.getElementById("emailLogin").value;
const senha = document.getElementById("senhaLogin").value;

if(email === "" || senha === "") {
alert("Preencha login!");
return;
}

document.getElementById("auth").classList.add("escondido");
document.getElementById("sistema").classList.remove("escondido");
}

function cadastrarUsuario() {
const nome = document.getElementById("nomeCadastro").value;

if(nome === "") {
alert("Preencha cadastro!");
return;
}

alert("Cadastro realizado com sucesso!");
}

/* VER DETALHES */
function verDetalhes(tipo) {

document.getElementById("detalhes").classList.remove("escondido");

if(tipo === "adm") {
document.getElementById("tituloVaga").innerText = "Assistente Administrativo";
document.getElementById("descricao").innerText = "Suporte administrativo e organização de documentos.";
document.getElementById("local").innerText = "📍 Fortaleza - CE";
}

if(tipo === "suporte") {
document.getElementById("tituloVaga").innerText = "Suporte Técnico";
document.getElementById("descricao").innerText = "Atendimento técnico e suporte a sistemas.";
document.getElementById("local").innerText = "📍 Remoto / Híbrido";
}
}

/* CANDIDATURA */
function candidatar() {

document.getElementById("status").classList.remove("escondido");

alert("Candidatura enviada com sucesso! Boa sorte 🍀");
}