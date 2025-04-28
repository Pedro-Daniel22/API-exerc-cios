let dadosExercicios = []; // Armazena os dados dos exercícios da API ou cache
let paginaAtual = 1; // Página inicial é 1
const porPagina = 6; // Exibe 6 itens por página

// Função chamada ao clicar no botão "Buscar"
async function buscarExercicios() {
  const resultadoDiv = document.getElementById('resultado');
  const muscle = document.getElementById('muscleInput').value.trim().toLowerCase();

  // Se já houver dados armazenados (cache), exibe imediatamente
  if (dadosExercicios.length > 0) {
    renderizarPagina();
    return;
  }

  try {
    resultadoDiv.innerHTML = '<p>Carregando dados da API...</p>';

    // Chama a função para buscar os dados na API
    const dados = await getExerciciosPorGrupo(muscle);

    // Verifica se os dados recebidos são válidos
    if (!Array.isArray(dados)) {
      resultadoDiv.innerHTML = `<p>Erro: ${JSON.stringify(dados)}</p>`;
      return;
    }

    if (dados.length === 0) {
      resultadoDiv.innerHTML = '<p>Nenhum exercício encontrado.</p>';
      return;
    }

    // Armazena os dados em cache
    dadosExercicios = dados;
    paginaAtual = 1;

    // Exibe a primeira página dos resultados
    renderizarPagina();
  } catch (erro) {
    console.error(erro);
    resultadoDiv.innerHTML = 'Erro ao buscar os exercícios.';
  }
}

// Função para renderizar os dados da página atual
function renderizarPagina() {
  const resultadoDiv = document.getElementById('resultado');

  // Calcula o índice inicial e final dos dados para a página atual
  const inicio = (paginaAtual - 1) * porPagina;
  const fim = inicio + porPagina;

  // Filtra os dados para exibir apenas a página atual
  const pagina = dadosExercicios.slice(inicio, fim);

  // Exibe os dados da página atual
  resultadoDiv.innerHTML = renderizarExercicios(pagina);

  // Calcula o total de páginas
  const totalPaginas = Math.ceil(dadosExercicios.length / porPagina);

  // Exibe os controles de navegação
  resultadoDiv.innerHTML += renderizarPaginacao(paginaAtual, totalPaginas);
}

// Função para ir para a página anterior
function paginaAnterior() {
  if (paginaAtual > 1) {
    paginaAtual--;
    renderizarPagina();
  }
}

// Função para ir para a próxima página
function proximaPagina() {
  const totalPaginas = Math.ceil(dadosExercicios.length / porPagina);
  if (paginaAtual < totalPaginas) {
    paginaAtual++;
    renderizarPagina();
  }
}
