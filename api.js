// Função para pegar os exercícios da API com base no grupo muscular
async function getExerciciosPorGrupo(grupo) {
    const url = `https://exercisedb.p.rapidapi.com/exercises/target/${grupo}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': '5ff6b52a7dmsh516244017bcb1b8p179dedjsnaf64caf569fa'
      }
    };
  
    try {
      const resposta = await fetch(url, options);
      const dados = await resposta.json();
      return dados;
    } catch (erro) {
      console.error(erro);
      return [];
    }
  }
  