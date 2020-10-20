import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const Container = styled.View`
  flex: 1;
  min-height: ${height}px;
`;

export const Card = styled.View`
  flex: 1;
  justify-content:center
  align-self: center
  border-radius: 8px;
  background: #FFF;
  shadow-color: #808080;
  shadow-offset: 0 3px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
  width: ${width - 20}px;
  min-height: ${height / 2}px
  margin-top: 20px
`;

export const CardImage = styled.View`
  flex: 1;
  margin: 5px;
`;

export const Image = styled.Image`
  resize-mode: contain;
  align-self: center
  width: 100%;
  height: 100%;
`;

export const CardContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around
  align-items: center;
  margin: 0 20px 20px 20px
`;

export const CardBody = styled.View`
  margin: 10px;
`;

export const CardTitle = styled.Text`
  color: #c1c7c9;
  font-size: 12px;
`;

export const CardText = styled.Text`
  color: #121212;
  font-size: 16px;
`;
