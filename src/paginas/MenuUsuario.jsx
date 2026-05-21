import { useState } from "react";
import { validarEmail } from "../services/Validacao";
import "../CSS/MenuUsuario.css"; // Lembre-se de ajustar o caminho da pasta CSS se necessário

export default function MenuUsuario({ usuario }) {
  const [fotoPerfil, setFotoPerfil] = useState("");
  const [nomeUsuario, setNomeUsuario] = useState(usuario ? usuario.nome : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");

  // Função simples para mostrar a imagem que o usuário escolheu
  function handleFotoChange(e) {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validacaoEmail = validarEmail({ email: email });

    if (validacaoEmail && !validacaoEmail.ok) {
      alert(validacaoEmail.msg);
      return;
    }

    alert("Alterações salvas com sucesso!");
  }

  return (
    <div className="menuUsuario-page">
      <div className="menuUsuario-container">
        <h2>Meu Perfil</h2>

        <form onSubmit={handleSubmit} className="menuUsuario-form">
          <div className="fotoPerfil-section">
            <div className="fotoPerfil-preview">
              {fotoPerfil ? (
                <img src={fotoPerfil} alt="Perfil do usuário" />
              ) : (
                <div className="fotoPerfil-placeholder">👤</div>
              )}
            </div>
            {/* O label funciona como um botão e ativa o input escondido abaixo */}
            <label htmlFor="inputFoto" className="btn-escolher-foto">
              Escolher foto
            </label>
            <input
              id="inputFoto"
              type="file"
              accept=".png, .jpeg, .jpg"
              name="fotoPerfil"
              onChange={handleFotoChange}
            />
          </div>

          <div className="InputForm">
            <label htmlFor="nomeUsuário">Nome de Usuário:</label>
            <input
              type="text"
              name="nomeUsuário"
              className="inputPadrao"
              placeholder="Digite seu nome"
              onChange={(e) => setNomeUsuario(e.target.value)}
              value={nomeUsuario}
            ></input>
          </div>

          <div className="InputForm">
            <label htmlFor="emailUsuario">Email:</label>
            <input
              type="text"
              name="emailUsuario"
              className="inputPadrao"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>

          <div className="botoes-acao">
            {/* O type="button" é essencial aqui para não enviar o form sem querer */}
            <button
              type="button"
              className="btnSecundario"
              onClick={() => alert("Página de alterar senha em breve!")}
            >
              Alterar senha
            </button>
            <button type="submit" className="btnPrincipal">
              Salvar alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
