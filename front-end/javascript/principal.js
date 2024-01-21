const botaoMenu = document.querySelector("#botaoMenu");
const areaFundoModal = document.querySelector("#areaFundoModal");
const botaoFecharModal = document.querySelector("#botaoFecharModal");

// Adiciona evento "click" à janela do navegador
window.addEventListener("click", fecharModalClique);

// Adiciona evento "keydown" à janela do navegador
window.addEventListener("keydown", fecharModalTecla);

// Adiciona evento "click" ao botão de menu
botaoMenu.addEventListener("click", mostrarBarraNav);

// Adiciona evento "click" ao botão de fechar o modal
botaoFecharModal.addEventListener("click", fecharModal);

// Função que fecha o modal quando o usuário clica fora dele
function fecharModalClique(event){
	// Verifica se usuário clicou no elemento de id #areaFundoModal, ou seja, se usuário clicou fora dele
	if(event.target === areaFundoModal){
		fecharModal();
	}
}

// Função que fecha o modal quando o usuário aperta "Esc"
function fecharModalTecla(event){
	// Verifica se #areaFundoModal tem a classe .ativo, ou seja, se está sendo exibido e se tecla pressionada foi "Esc"
	if(areaFundoModal.classList.contains("ativo") && event.key === "Escape"){
		fecharModal();
	}
}

// Função que fecha o modal
function fecharModal(){
	areaFundoModal.classList.remove("ativo");
}

// Função que mostra e oculta a barra de navegação
function mostrarBarraNav(){
	const barraNav = document.querySelector("#barraNav");
	const iconeMenu = document.querySelector("#iconeMenu");

	// Verifica se barra de navegação NÃO tem classe .responsiva, ou seja, se NÃO está sendo exibida
	if(!barraNav.classList.contains("responsiva")){
		barraNav.classList.add("responsiva");

		iconeMenu.classList.remove("bi-list");
		iconeMenu.classList.add("bi-x");
	}else{
		barraNav.classList.remove("responsiva");

		iconeMenu.classList.remove("bi-x");
		iconeMenu.classList.add("bi-list");
	}
}