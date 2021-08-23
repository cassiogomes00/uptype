import styled from 'styled-components';

export default styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px;
  margin: 5px;
  background-color: #f1f1f1;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Icone = styled.img`
  margin: 10px 10px;
`;

const Name = styled.span`
  color: black;
  text-decoration: none;
`;

export { Icone, Name };
