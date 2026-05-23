import { useState } from "react";
import { validarFormulario } from "../services/Validacao"; // Importando a validação
import "../CSS/Cadastro.css";
import Modal from 'react-modal';

export default function Cadastro() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Pegando os valores diretamente dos inputs (já que não há estados para todos)
    const dados = {
      nome: e.target.nomeUsuário.value,
      email: e.target.emailUsuario.value,
      senha: e.target.senhaUsuário.value,
      confirma: e.target.confirmacaoSenha.value,
    };

    // Chamando a função de validação geral
    const validacao = validarFormulario(dados);

    if (!validacao.ok) {
      alert(validacao.msg);
      return; // Para a execução se houver erro
    }

    alert("Cadastro passou na validação!");
  }

  return (
    <div className="Cadastro-page">
      <div className="Cadastro-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="Cadastro-form">
          <div className="InputForm">
            <label htmlFor="nomeUsuário">Nome de Usuário: </label>
            <input
              type="text"
              name="nomeUsuário"
              placeholder="Digites seu nome de usuário"
              className="inputPadrao"
            ></input>
          </div>
          <p className="erro" id="erroNomeUsuario"></p>
          <div className="InputForm">
            <label htmlFor="emailUsuario">Email: </label>
            <input
              type="text"
              name="emailUsuario"
              placeholder="Digites seu email"
              className="inputPadrao"
            ></input>
          </div>
          <p className="erro" id="erroEmail"></p>
          <div className="InputForm">
            <label htmlFor="senhaUsuário">Senha: </label>
            <input
              type="text"
              name="senhaUsuário"
              placeholder="Digites sua senha"
              className="inputPadrao"
            ></input>
          </div>
          <p className="erro" id="erroSenha"></p>
          <div className="InputForm">
            <label htmlFor="confirmacaoSenha">Confirme a Senha: </label>
            <input
              type="text"
              name="confirmacaoSenha"
              placeholder="Confirme sua senha"
              className="inputPadrao"
            ></input>
          </div>
          <p className="erro" id="erroSenhaConfirmacao"></p>
          <input
            className="btnPrincipal"
            type="submit"
            value="Cadastrar-se"
          ></input>
        </form>
      </div>
    </div>
  );
}
