import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height / 1.5}px
  border-top-left-radius: 14px
  border-top-right-radius: 14px
  background-color: #FFFF;
`;

export const Content = styled.View`
  margin: 20px;
`;

export const Details = styled.View`
  flex-wrap: nowrap
  flex-direction: row
  justify-content: space-between
`;

export const Item = styled.View`
  margin-top: 20px
  align-content: center
  flex-direction: column
`;

export const ItemText = styled.Text`
  text-align: center;
`;

export const Title = styled.Text`
  margin-vertical: 20px
  text-align: center
  font-weight: bold
  font-size: 28px
  color: #121212
`;

export const Text = styled.Text`
  font-size: 18px;
  font-weight: 300;
`;
