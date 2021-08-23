import styled from 'styled-components';

export default styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: black;
  text-decoration: none;
  font-size: 0.7rem;
`;

const Icon = styled.img`
  width: 100%;
  max-width: 40px;

  :hover {
    max-width: 50px;
    transition: 0.15s ease-in-out;
  }
`;

export { Icon };
