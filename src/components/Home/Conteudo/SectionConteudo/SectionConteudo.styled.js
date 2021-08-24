import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-columns: 7fr 2fr;
  grid-row-gap: 10px;
  grid-template-areas:
    'titulo button'
    'conteudo conteudo';

  padding: 10px 0px;
  @media (max-width: 700px) {
    grid-template-rows: 1fr 12fr;
  }
`;
