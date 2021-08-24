export function iniciarTeste(nome, tamanho) {
  return {
    type: 'INICIAR-TESTE',
    payload: {
      nome,
      tamanho,
    },
  };
}

export function digitar(textoDigitado, inicio, fim) {
  return {
    type: 'DIGITAR',
    payload: {
      textoDigitado,
      inicio,
      fim,
    },
  };
}

export function terminar() {
  return {
    type: 'TERMINAR-TESTE',
    payload: null,
  };
}
