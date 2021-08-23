import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-gap: 3px;
  align-items: center;
  grid-template-areas:
    'iconLogin entrar'
    'iconLogin cadastrar';
`;

const IconLogin = styled.img`
  grid-area: iconLogin;
  height: 100%auto;
  max-height: 60px;
`;

const Entrar = styled.span`
  grid-area: entrar;
  align-self: flex-end;
`;

const Cadastrar = styled.span`
  grid-area: cadastrar;
  align-self: flex-start;
`;

export { IconLogin, Entrar, Cadastrar };
