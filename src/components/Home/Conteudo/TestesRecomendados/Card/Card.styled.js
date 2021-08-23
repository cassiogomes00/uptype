import styled from 'styled-components';

export default styled.div`
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
