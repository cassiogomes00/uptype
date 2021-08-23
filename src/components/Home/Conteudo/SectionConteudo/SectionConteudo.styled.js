import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 7fr 2fr;
  grid-row-gap: 10px;
  grid-template-areas:
    'titulo verMais'
    'conteudo conteudo';

  padding: 10px 0px;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 12fr;
  }
`;

const Titulo = styled.h1`
  grid-area: titulo;
  align-self: center;
`;

const VerMais = styled.a`
  grid-area: verMais;
`;

const Conteudo = styled.div`
  grid-area: conteudo;
`;

export { Titulo, VerMais, Conteudo };
