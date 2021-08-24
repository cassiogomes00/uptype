export function adicionarRegistro(data, velocidade) {
  return {
    type: 'ADICIONAR-REGISTRO',
    payload: { data, velocidade },
  };
}
