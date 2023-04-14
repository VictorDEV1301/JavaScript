// Você foi contratado por uma empresa que deseja implementar um sistema de validação de senhas de usuários. 
// A empresa quer que você crie uma função construtora chamada ValidadorSenha, 
// que será responsável por validar se uma determinada senha atende aos requisitos mínimos de segurança.

// A senha é considerada válida se:

// Possui pelo menos 8 caracteres;
// Possui pelo menos uma letra maiúscula;
// Possui pelo menos uma letra minúscula;
// Possui pelo menos um número.

function ValidadorSenha(senha){
  if(!/[A-Z]/.test(senha)) return false;
  if(!/[a-z]/.test(senha)) return false;
  if(!/[0-9]/.test(senha)) return false;
  if(!senha.length > 8) return false;
  return true;
}

const senhas = ['Abc12345', 'abcd1234', 'ABC1234', 'Abcdabcd', 'Abcd1234', '12345678'];
const senhasValidas = senhas.filter(ValidadorSenha);
console.log(senhasValidas);

