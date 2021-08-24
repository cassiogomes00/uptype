const defaultState = {
  nome: '',
  titulo: '',
  tamanho: 0,
  textoDigitado: '',
  inicio: null,
  fim: null,
};

export default function testeReducer(state = defaultState, action) {
  const { type, payload } = action;

  const gerarTitulo = (codigo) => {
    switch (codigo) {
      case 'contra-relogio':
        return 'Contra o relógio';
      case 'maratona':
        return 'Maratona';
      case 'zen':
        return 'Zen';
      default:
        return codigo;
    }
  };

  switch (type) {
    case 'INICIAR-TESTE':
      return { ...state, ...payload, titulo: gerarTitulo(payload.nome) };
    case 'DIGITAR':
      return { ...state, ...payload };
    case 'TERMINAR-TESTE':
      return { ...state, ...defaultState };
    default:
      return state;
  }
}
