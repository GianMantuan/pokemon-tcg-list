import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export const Container = styled.ScrollView`
  min-height: ${height}px;
`;

export const Header = styled.View`
  flex: 1
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-content: center
`;

export const Body = styled.View`
  margin: 5px 20px 20px 20px;
`;

export const Title = styled.Text`
  margin-bottom: 10px
  font-size: 28px
  color: #121212
`;

export const Label = styled.Text`
  color: #121212;
  font-weight: 200
  font-size: 20px;
  margin-vertical: 5px
`;

export const ImageContainer = styled.View`
  height: ${height / 1.5}px;
`;

export const Image = styled.Image`
  resize-mode: contain;
  align-self: center
  width: 100%;
  height: 100%;
`;
