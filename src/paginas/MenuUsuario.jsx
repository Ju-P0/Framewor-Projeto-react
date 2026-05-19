import { useState } from "react";

export default function MenuUsuario({ usuario }) {
  const [fotoPerfil, setFotoPerfil] = useState(<img src="" />);
  const [nomeUsuario, setNomeUsuario] = useState(usuario ? usuario.nome : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");

x
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="InputForm">
          <img src="fotoPerfil"></img>
          <label htmlFor="fotoPerfil">escolher foto</label>
          <input type="file" accept=".png, .jpeg, .jpg" name="fotoPerfil" />
        </div>
        <div className="InputForm">
          <label htmlFor="nomeUsuário">Nome de Usuário: </label>
          <input
            type="text"
            name="nomeUsuário"
            onChange={(e) => setNomeUsuario(e.target.value)}
            value={nomeUsuario}
          ></input>
        </div>
        <div className="InputForm">
          <label htmlFor="emailUsuario">Email: </label>
          <input
            type="text"
            name="emailUsuario"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <button>Alterar senha</button>
        </div>
        <input type="submit" value="Salvar alterações"></input>
      </form>
    </div>
  );
}
