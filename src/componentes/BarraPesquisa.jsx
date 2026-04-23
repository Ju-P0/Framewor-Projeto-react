import { useState } from "react";

function BarraPesquisa() {
  const [searchQuery, setSearchQuery] = useState("");

  function funcionamentoPesquisa() {
    alert(searchQuery);
    setSearchQuery("");
  }

  return (
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
  );
}

export default BarraPesquisa;
