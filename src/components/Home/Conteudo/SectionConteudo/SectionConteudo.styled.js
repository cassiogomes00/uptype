import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-columns: 7fr 1fr;
  grid-row-gap: 10px;
  grid-template-areas:
    'titulo verMais'
    'conteudo conteudo';

  padding: 10px 0px;
`;

const Titulo = styled.h1`
  grid-area: titulo;
`;

const VerMais = styled.a`
  grid-area: verMais;
`;

const Conteudo = styled.div`
  grid-area: conteudo;
`;

export { Titulo, VerMais, Conteudo };
