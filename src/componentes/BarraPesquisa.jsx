import { useState } from "react";

function BarraPesquisa() {
  const [searchQuery, setSearchQuery] = useState("");

  function funcionamentoPesquisa(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchQuery(searchQuery);
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
