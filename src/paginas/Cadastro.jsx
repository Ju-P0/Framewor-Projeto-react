import { useState } from "react";
import { validarFormulario } from "../services/Validacao.js"; // Importando a validação
import "../CSS/Cadastro.css";
import Modal from "react-modal";

export default function Cadastro() {
  const [campos, setCampos] = useState({
    nome: "",
    email: "",
    senha: "",
    confirma: "",
  });
  const [erros, setErros] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setCampos((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Pegando os valores diretamente dos inputs (já que não há estados para todos)
    const dados = {
      nome: e.target.nomeUsuário.value,
      email: e.target.emailUsuario.value,
      senha: e.target.senhaUsuário.value,
      confirma: e.target.confirmacaoSenha.value,
    };

    const errosValidacao = validarFormulario(dados);

    setErros(errosValidacao);

    if (Object.keys(errosValidacao).length > 0) return;

    alert("Cadastro passou na validação!");
  }

  return (
    <div className="Cadastro-page">
      <div className="Cadastro-container">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="Cadastro-form">
          {/* Nome usuário */}
          <div className="InputForm" id="NomeUsuário">
            <label htmlFor="nomeUsuário">Nome de Usuário: </label>
            <input
              type="text"
              name="nomeUsuário"
              placeholder="Digites seu nome de usuário"
              className="inputPadrao"
              value={campos.nomeUsuário}
              onChange={handleChange}
            ></input>
            <p className="erro" id="erroNomeUsuario">
              {erros.nome}
            </p>
          </div>

          {/* Email Usuário */}
          <div className="InputForm">
            <label htmlFor="emailUsuario">Email: </label>
            <input
              type="text"
              name="emailUsuario"
              placeholder="Digites seu email"
              className="inputPadrao"
              value={campos.emailUsuario}
              onChange={handleChange}
            ></input>
            <p className="erro" id="erroEmail">
              {erros.email}
            </p>
          </div>

          {/* Senha Usuário */}
          <div className="InputForm">
            <label htmlFor="senhaUsuário">Senha: </label>
            <input
              type="text"
              name="senhaUsuário"
              placeholder="Digites sua senha"
              className="inputPadrao"
              value={campos.senhaUsuário}
              onChange={handleChange}
            ></input>
            <p className="erro" id="erroSenha">
              {erros.senha}
            </p>
          </div>

          {/* Confirmação Senha usuário */}
          <div className="InputForm">
            <label htmlFor="confirmacaoSenha">Confirme a Senha: </label>
            <input
              type="text"
              name="confirmacaoSenha"
              placeholder="Confirme sua senha"
              className="inputPadrao"
              value={campos.confirmacaoSenha}
              onChange={handleChange}
            ></input>
            <p className="erro" id="erroSenhaConfirmacao">
              {erros.confirma}
            </p>
          </div>

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
