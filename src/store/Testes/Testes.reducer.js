const defaultState = {
  contraRelogio: {
    tamanho: 1,
    modo: 'aleatorio',
  },
  maratona: {
    tamanho: 1,
    modo: 'aleatorio',
  },
  zen: {
    modo: 'aleatorio',
  },
};

export default function testesReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CONTRA-RELOGIO':
      return { ...state, contraRelogio: { ...payload } };
    case 'MARATONA':
      return { ...state, maratona: { ...payload } };
    case 'ZEN':
      return { ...state, zen: { ...payload } };
    default:
      return state;
  }
}
