const botaoMenu = document.querySelector("#botaoMenu");

// Adiciona evento "click" ao botão de menu
botaoMenu.addEventListener("click", mostrarBarraNav);

// Função que mostra e oculta a barra de navegação em resoluções menores
function mostrarBarraNav(){
	const barraNav = document.querySelector("#barraNav");
	const iconeMenu = document.querySelector("#iconeMenu");

	/* 
		Verifica se barraNav NÃO possui classe ".responsiva", ou seja,
		se barra de navegação NÃO está sendo exibida
	*/
	if(!barraNav.classList.contains("responsiva")){
		barraNav.classList.add("responsiva");

		// Troca o ícone de menu por um ícone de "X"
		iconeMenu.classList.remove("bi-list");
		iconeMenu.classList.add("bi-x");
	}else{
		barraNav.classList.remove("responsiva");

		// Troca o ícone de "X" pelo ícone de menu que estava presente anteriormente
		iconeMenu.classList.remove("bi-x");
		iconeMenu.classList.add("bi-list");
	}
}