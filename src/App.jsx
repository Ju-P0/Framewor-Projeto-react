import "./App.css";
import Home from "./paginas/Home";
import { Routes, Route } from "react-router-dom";
import Favoritos from "./paginas/Favoritos";
import BarraNav from "./componentes/BarraNav";
import MenuUsuario from "./paginas/MenuUsuario";

function App() {
  return (
    <div>
      <BarraNav />
      <main className="conteudoMain">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/menuUsuario" element={<MenuUsuario />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
