import { useState } from "react";

export default function Cadastro() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="InputForm">
          <label htmlFor="nomeUsuário">Nome de Usuário: </label>
          <input
            type="text"
            name="nomeUsuário"
            placeholder="Digites seu nome de usuário"
          ></input>
        </div>
        <div className="InputForm">
          <label htmlFor="emailUsuario">Email: </label>
          <input
            type="text"
            name="emailUsuario"
            placeholder="Digites seu email"
          ></input>
        </div>
        <div className="InputForm">
          <label htmlFor="senhaUsuário">Senha: </label>
          <input
            type="text"
            name="senhaUsuário"
            placeholder="Digites sua senha"
          ></input>
        </div>
        <div className="InputForm">
          <label htmlFor="confirmacaoSenha">Confirme a Senha: </label>
          <input
            type="text"
            name="confirmacaoSenha"
            placeholder="Confirme sua senha"
          ></input>
        </div>
        <input type="submit" value="Cadastrar-se"></input>
      </form>
    </div>
  );
}
