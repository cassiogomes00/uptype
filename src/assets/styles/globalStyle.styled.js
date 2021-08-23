import styled from 'styled-components';

export default styled.div`
  max-height: 100vh;
  max-width: 100vw;

  display: grid;
  grid-template-columns: 1fr 20fr 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    'header header header'
    'nav conteudo vazio';

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 10fr 1fr;
    grid-template-areas:
      'header'
      'conteudo'
      'nav';
  }
`;
