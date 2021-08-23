import styled from 'styled-components';

export default styled.nav`
  grid-area: nav;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 50px 5px;

  background-color: #f1f1f1;
  height: 100%;

  @media (max-width: 500px) {
    flex-direction: row;

    padding: 10px;
  }
`;
