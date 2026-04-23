import { Link } from "react-router-dom";
import "../CSS/BarraNav.css";
import BarraPesquisa from "./BarraPesquisa";
import popplayLogo from "../imgs/logo popplay.png";

function BarraNav() {
  return (
    <nav className="barraNav">
      <div className="logoSite">
        <Link to="/" className="linkNav">
          <img src={popplayLogo} alt="PopPlay" className="logoImg" />
        </Link>
      </div>
      <div className="linkHome">
        <Link to="/" className="linkNav">
          Home
        </Link>
      </div>
      <BarraPesquisa />
      <div className="linkFavs">
        <Link to="/favoritos" className="linkNav">
          Favoritos
        </Link>
      </div>
      <div>
        <Link to="/menuUsuario" className="linkNav">
          Menu de Usuário
        </Link>
      </div>
    </nav>
  );
}

export default BarraNav;
