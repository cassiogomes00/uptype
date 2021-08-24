import styled from 'styled-components';

export default styled.span`
  color: ${(props) => (props.estaCorreto ? 'green' : 'red')};
`;
