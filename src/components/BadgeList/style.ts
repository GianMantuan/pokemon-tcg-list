import styled from 'styled-components/native';
import {TypesColor} from '../../utils';

export const List = styled.View`
  flex-direction: row
  flex-wrap: wrap
  justify-content: flex-start
  align-items: center
`;

export const BadgeContainer = styled.View`
  align-self: flex-start
  padding: 5px
  margin-horizontal: 5px
  border-radius: 4px
  background-color: ${(props) => TypesColor[props.color]};
`;

export const BadgeTitle = styled.Text`
  color: #FFFF
  font-size: 16px;
  text-align: center
`;
