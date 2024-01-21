const botaoMenu = document.querySelector("#botaoMenu");

// Adiciona evento "click" ao botão de menu
botaoMenu.addEventListener("click", mostrarBarraNav);

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