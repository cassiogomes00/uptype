const defaultState = [{ data: null, velocidade: 0 }];

export default function historicoReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ADICIONAR-REGISTRO':
      return [...state, { data: payload.data, velocidade: payload.velocidade }];
    default:
      return state;
  }
}
