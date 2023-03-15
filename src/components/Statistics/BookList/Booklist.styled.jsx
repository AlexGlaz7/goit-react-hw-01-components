import styled from '@emotion/styled';
import { randomColor } from '../../../Utils/index';

const ListItem = styled.li`
  opacity: 0.8;
  width: calc(100% / 5);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => randomColor()};
`;

export { ListItem };
