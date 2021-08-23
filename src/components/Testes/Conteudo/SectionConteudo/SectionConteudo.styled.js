import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-rows: 1fr repeat(3, 1fr);
  grid-template-columns: 3fr 5fr 5fr;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  grid-template-areas:
    'titulo titulo titulo'
    'icone descricao descricao'
    'icone range radio'
    'icone botao botao';

  margin-bottom: 50px;

  padding: 10px 0px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      'titulo'
      'descricao'
      'range'
      'radio'
      'botao';
  }
`;

const Titulo = styled.h1`
  grid-area: titulo;
`;

const Icone = styled.img`
  grid-area: icone;

  justify-self: center;

  width: 100%;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Descricao = styled.p`
  grid-area: descricao;
`;

const Botao = styled.div`
  grid-area: botao;
`;

export { Titulo, Icone, Descricao, Botao };
