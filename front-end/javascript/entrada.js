const formulario = document.querySelector("#formulario");
const campoSenha = document.querySelector("#campoSenha");
const iconeMostrarSenha = document.querySelector("#iconeMostrarSenha");
const textoMostrarSenha = document.querySelector("#textoMostrarSenha");

// Adiciona evento "submit" ao formulário
formulario.addEventListener("submit", validarForm);

// Adiciona evento "click" ao ícone de mostrar senha
iconeMostrarSenha.addEventListener("click", mostrarSenha);

// Adiciona evento "click" ao texto do ícone de mostrar senha
textoMostrarSenha.addEventListener("click", mostrarSenha);

// Função que valida o formulário
function validarForm(event){
	const campoUsuario = document.querySelector("#campoUsuario");

	// Previne o formulário de ser enviado
	event.preventDefault();

	// Verifica se campo de usuário NÃO foi preenchido
	if(campoUsuario.value === ""){
		exibirModal("Por favor, informe um nome de usuário.");

		return;
	}

	// Verifica se nome de usuário informado tem mais de 50 dígitos
	if(campoUsuario.value.length > 50){
		exibirModal("Por favor, informe um nome de usuário de até 50 dígitos.");

		return;
	}

	// Verifica se campo de senha NÃO foi preenchido
	if(campoSenha.value === ""){
		exibirModal("Por favor, informe uma senha.");

		return;
	}

	// Verifica se senha informada tem menos de 8 dígitos ou mais de 50 dígitos
	if(campoSenha.value.length < 8 || campoSenha.value.length > 50){
		exibirModal("Por favor, informe uma senha que tenha entre 8 e 50 dígitos.");

		return;
	}

	formulario.submit();
}

// Função que exibe o modal
function exibirModal(mensagemVal){
	const areaFundoModal = document.querySelector("#areaFundoModal");
	const msgModal = document.querySelector("#msgModal");

	areaFundoModal.classList.add("ativo");

	msgModal.textContent = mensagemVal;
}

// Função que mostra e oculta a senha
function mostrarSenha(){
	// Verifica se campo de senha é do tipo "password"
	if(campoSenha.getAttribute("type") === "password"){
		campoSenha.setAttribute("type", "text");

		iconeMostrarSenha.classList.remove("bi-circle");
		iconeMostrarSenha.classList.add("bi-check-circle-fill");
	}else{
		campoSenha.setAttribute("type", "password");

		iconeMostrarSenha.classList.remove("bi-check-circle-fill");
		iconeMostrarSenha.classList.add("bi-circle");
	}
}