import styled from 'styled-components';

export default styled.div`
  font-family: 'Fira Code', monospace;

  overflow: auto;

  max-height: 400px;

  padding: 10px;
  margin: 5px auto;

  background-color: #f1f1f1;
  border-radius: 10px;

  @media (max-width: 500px) {
    max-height: 300px;
  }
`;
