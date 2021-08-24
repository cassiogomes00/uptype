export function alterarContraRelogio(tamanho, modo) {
  return { type: 'CONTRA-RELOGIO', payload: { tamanho, modo } };
}

export function alterarMaratona(tamanho, modo) {
  return { type: 'MARATONA', payload: { tamanho, modo } };
}

export function alterarZen(tamanho, modo) {
  return { type: 'ZEN', payload: { modo } };
}
