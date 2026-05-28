const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN_LENGTH = 8;

export function validarFormulario(dados) {
  const erros = {};

  if (!dados.nome) erros.nome = "Nome é obrigatório.";

  if (!dados.email) erros.email = "Email é obrigatório.";
  else if (!EMAIL_REGEX.test(dados.email))
    erros.email = "Insira um email válido.";

  if (!dados.senha) erros.senha = "Senha é obrigatória.";
  else if (dados.senha.length < SENHA_MIN_LENGTH)
    erros.senha = `A senha deve ter pelo menos ${SENHA_MIN_LENGTH} caracteres.`;

  if (!dados.confirma) erros.confirma = "Confirmação é obrigatória.";
  else if (dados.confirma !== dados.senha)
    erros.confirma = "As senhas não coincidem.";

  return erros;
}

export function validarMenuUsuario(dados) {
  const erros = {};

  if (!dados.email) erros.email = "Email é obrigatório.";
  else if (!EMAIL_REGEX.test(dados.email))
    erros.email = "Insira um email válido.";

  return erros;
}
