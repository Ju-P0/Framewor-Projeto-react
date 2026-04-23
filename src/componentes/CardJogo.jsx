function CardJogo({ jogo }) {
  function favoritar() {
    alert("Favoritado!");
  }

  return (
    <div className="cardJogo">
      <div className="cardJogo__imagem">
        {jogo.url ? (
          <img src={jogo.url} alt={jogo.nome} />
        ) : (
          <div className="cardJogo__placeholder">🎀</div>
        )}
        <div className="overlay">
          <button className="btnFavoritar" onClick={favoritar}>
            ☆
          </button>
        </div>
      </div>
      <div className="tituloJogo">
        <h2>{jogo.nome}</h2>
      </div>
    </div>
  );
}

export default CardJogo;
