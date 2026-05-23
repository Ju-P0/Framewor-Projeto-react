import "../CSS/CardJogo.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CardJogo({ jogo }) {
  const [isOpen, setIsOpen] = useState(false);

  const navegar = useNavigate();

  function favoritar() {
    alert("Favoritado!");
  }

  return (
    <div className="cardJogo">
      <button className="BtnCardJogo" onClick={() => navegar("/jogo")}>
        <div className="cardJogo__imagem">
          {jogo.background_image ? (
            <img src={jogo.background_image} alt={jogo.name} />
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
          <h2>{jogo.name}</h2>
        </div>
      </button>
    </div>
  );
}

export default CardJogo;
