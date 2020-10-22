import styled from 'styled-components/native';

export const List = styled.TouchableOpacity`
  flex: 1  
  padding: 20px
  margin: 5px
  border-radius: 14px
  background-color: rgba(230,230,230, 0.5);
`;

export const CardItem = styled.View`
  justify-content: space-between
  flex-direction: row
`;

export const CardText = styled.Text`
  color: #121212
  font-size: 16px;
`;
