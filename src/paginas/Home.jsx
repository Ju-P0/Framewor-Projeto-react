import CardJogo from "../componentes/CardJogo";
import BarraPesquisa from "../componentes/BarraPesquisa";
import { useState } from "react";

function Home() {
  const jogos = [{ id: 1, nome: "Geometric Trash" }];
  const [searchQuery, setSearchQuery] = useState("");

  function funcionamentoPesquisa() {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  }

  return (
    <div className="home">
      <div>
        <form onSubmit={funcionamentoPesquisa} className="barraPesquisa">
          <input
            type="text"
            placeholder="Pesquise jogos pelos seus nomes"
            className="barraInput"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="btnPesquisa">
            ⌕
          </button>
        </form>
      </div>

      <div className="gridJogos">
        {jogos.map(
          (jogo) =>
            jogo.nome
              .toLocaleLowerCase()
              .startsWith(searchQuery.toLowerCase()) && (
              <CardJogo jogo={jogo} key={jogo.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
