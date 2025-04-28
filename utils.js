// Função para renderizar os exercícios em HTML
function renderizarExercicios(lista) {
    return lista.map(ex => `
      <div class="exercise">
        <h3>${ex.name}</h3>
        <img src="${ex.gifUrl}" alt="${ex.name}">
        <p><strong>Equipamento:</strong> ${ex.equipment}</p>
        <p><strong>Grupo alvo:</strong> ${ex.target}</p>
      </div>
    `).join('');
  }
  
  // Função para renderizar a navegação entre páginas
  function renderizarPaginacao(paginaAtual, totalPaginas) {
    return `
      <div style="margin-top: 20px; text-align: center;">
        <button onclick="paginaAnterior()" ${paginaAtual === 1 ? 'disabled' : ''}>Anterior</button>
        <span style="margin: 0 10px;">Página ${paginaAtual} de ${totalPaginas}</span>
        <button onclick="proximaPagina()" ${paginaAtual === totalPaginas ? 'disabled' : ''}>Próxima</button>
      </div>
    `;
  }
  