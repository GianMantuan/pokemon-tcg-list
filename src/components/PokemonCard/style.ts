import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {TypesColor} from '../../utils';

const {height, width} = Dimensions.get('screen');

export const Container = styled.ScrollView`
  flex: 1;
  min-height: ${height}px;
`;
// rgb(230,230,230)
export const Card = styled.View`
  flex: 1;
  justify-content:center
  align-self: center
  border-radius: 8px;
  background: #FFFF;
  box-shadow: 0px 0px 5px rgba(128,128,128, 0.5);
  shadow-opacity: 1;
  shadow-radius: 5px;
  elevation: 5;
  width: ${width - 100}px;
  min-height: ${height / 1.7}px
  margin-top: 20px
  margin-bottom: 20px
`;

export const CardImage = styled.View`
  flex: 1;
  margin: -20px 5px 5px 5px;
  box-shadow: 0px 0px 2px rgba(128, 128, 128, 0.5);
`;

export const Image = styled.Image`
  resize-mode: contain;
  align-self: center
  width: 100%;
  height: 100%;
  box-shadow: 3px 3px 10px rgb(230,230,230);
  shadow-opacity: 1;
  shadow-radius: 5px;
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
  color: #121212;
  font-weight: 200
  font-size: 14px;
  margin-bottom: 5px
`;

export const CardText = styled.Text`
  color: ${(props) => props.color || '#121212'};
  font-size: 16px;
`;

export const CardFooter = styled.View`
  margin: 20px;
`;
