const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN_LENGTH = 8;

export function validarEmail(dados) {
  if (!dados.email) return null;
  const ok = EMAIL_REGEX.test(dados.email);
  return ok
    ? { ok: true, msg: "✓ Email válido" }
    : { ok: false, msg: "Insira um email válido" };
}

export function validarSenha(dados) {
  if (!dados.senha) return null;
  const ok = dados.senha.length >= SENHA_MIN_LENGTH;
  return ok
    ? { ok: true, msg: "✓ Senha válida" }
    : {
        ok: false,
        msg: `A senha deve ter pelo menos ${SENHA_MIN_LENGTH} caracteres`,
      };
}

export function validarConfirmacaoSenha(dados) {
  if (!dados.confirma) return null;
  const ok = dados.confirma === dados.senha;
  return ok
    ? { ok: true, msg: "✓ As senhas coincidem" }
    : { ok: false, msg: "As senhas não coincidem" };
}

export function validarFormulario(dados) {
  if (!dados.nome || !dados.email || !dados.senha || !dados.confirma) {
    return { ok: false, msg: "Por favor, preencha todos os campos." };
  }
  if (!EMAIL_REGEX.test(dados.email)) {
    return { ok: false, msg: "Insira um email válido." };
  }
  if (dados.senha.length < SENHA_MIN_LENGTH) {
    return {
      ok: false,
      msg: `A senha deve ter pelo menos ${SENHA_MIN_LENGTH} caracteres.`,
    };
  }
  if (dados.senha !== dados.confirma) {
    return { ok: false, msg: "As senhas não coincidem." };
  }
  return { ok: true, msg: null };
}
