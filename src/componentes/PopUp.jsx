import "../CSS/PopUp.css";

function PopUp() {
  function setIsOpen(x) {
    if (x === true) {
      PopUp.style.display = "flex";
    }
    PopUp.style.display = "none";
  }

  return (
    <div className="popUpGames">
      <div className="PopUpJogo_Imagen">
        {jogo.url ? (
          <img src={jogo.url} alt={jogo.nome} />
        ) : (
          <div className="PopUpJogo__placeholder">🎀</div>
        )}
      </div>
      <button onClick={() => setIsOpen(false)}>fechar</button>
    </div>
  );
}

export default PopUp;
