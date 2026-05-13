import "../CSS/CardJogo.css";
import { useState } from "react";
import PopUp from "./PopUp";

function CardJogo({ jogo }) {
  const [isOpen, setIsOpen] = useState(false);

  function favoritar() {
    alert("Favoritado!");
  }

  return (
    <div className="cardJogo" onClick={() => setIsOpen(true)}>
      <button className="BtnCardJogo">
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
      </button>

      {/* <PopUp /> */}
    </div>
  );
}

export default CardJogo;
