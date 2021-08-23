import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
